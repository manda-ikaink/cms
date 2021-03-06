<template>
    <div class="preview">
        <div class="preview__controls" :aria-hidden="!showControls" :class="{'w-0 border-0': !showControls}">
            <button @click="toggleControls" ref="show-controls" class="simple-button show-controls-button" :class="{'hidden': showControls, 'inline-block': !showControls}"><fa-icon :icon="['fas', 'caret-square-right']" class="fa-fw"></fa-icon> Show Controls</button>
            <div class="controls" :class="{'hidden': !showControls}">
                <div class="controls__header">
                    <router-link exact :to="{ name: 'dashboard' }" class="flex items-center px-3 py-2 border-r border-gray-300 leading-none">
                        <fa-icon :icon="['fas', 'times']" class="fa-fw"></fa-icon>
                    </router-link>

                    <div class="px-3 py-3">
                        <button type="submit" @click.prevent="submit" class="button button--primary button--small">Save</button>
                    </div>
                </div>

                <div class="controls__content">
                    <ui-accordion :multiple="true">
                        <ui-accordion-item v-for="(section, handle) in theme.options" :key="section.handle" :title="section.name">
                            <div class="p-3">
                                <p class="text-sm" v-if="section.description">{{ section.description }}</p>

                                <component
                                    v-for="(field, fieldHandle) in section.fields"
                                    v-model="form[handle][fieldHandle]"
                                    :key="fieldHandle"
                                    :is="field.fieldtype + '-fieldtype'"
                                    :field="{
                                        name: field.name,
                                        handle: handle,
                                        help: field.help,
                                        settings: field.settings || {},
                                    }"
                                    class="mb-8"
                                ></component>
                            </div>
                        </ui-accordion-item>
                    </ui-accordion>
                </div>

                <div class="controls__footer">
                    <button @click="toggleControls" ref="hide-controls" class="simple-button hide-controls-button"><fa-icon :icon="['fas', 'caret-square-left']" class="fa-fw"></fa-icon> Hide Controls</button>

                    <div class="flex border-l border-gray-300">
                        <button @click="setWindow('desktop')" class="simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500" :class="{'hover:border-primary-500 border-primary-500': isDesktop}">
                            <fa-icon :icon="['fas', 'desktop']" class="fa-fw"></fa-icon>
                        </button>

                        <button @click="setWindow('tablet')" class="simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500" :class="{'hover:border-primary-500 border-primary-500': isTablet}">
                            <fa-icon :icon="['fas', 'tablet-alt']" class="fa-fw"></fa-icon>
                        </button>

                        <button @click="setWindow('mobile')" class="simple-button relative inline-flex items-center px-3 py-2 border-b-4 border-gray-300 hover:border-gray-500" :class="{'hover:border-primary-500 border-primary-500': isMobile}">
                            <fa-icon :icon="['fas', 'mobile-alt']" class="fa-fw"></fa-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="preview__window flex-col">
            <div class="w-full px-2 bg-white border-b border-gray-300 flex items-center py-1">
                <button class="mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full" @click.prevent="navigateBack"><fa-icon :icon="['fas', 'arrow-left']" class="fa-fw text-gray-700"></fa-icon></button>
                <button class="mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full" @click.prevent="navigateForward"><fa-icon :icon="['fas', 'arrow-right']" class="fa-fw text-gray-700"></fa-icon></button>
                <button class="mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full" @click.prevent="navigateRefresh"><fa-icon :icon="['fas', 'redo']" class="fa-fw text-gray-700"></fa-icon></button>
                <button class="mr-1 w-8 h-8 focus:outline-none hover:bg-gray-200 rounded-full" @click.prevent="navigateHome"><fa-icon :icon="['fas', 'home']" class="fa-fw text-gray-700"></fa-icon></button>

                <div class="px-6 py-2 bg-gray-200 rounded-full text-gray-700 flex flex-1 mr-2 items-center leading-none">
                    <span>{{ prettyURL }}</span>
                </div>
            </div>

            <div class="window" :class="'window--' + window">
                <iframe ref="iframe" @load="onLoadIframe"></iframe>
            </div>
        </div>

        <confirm-modal></confirm-modal>
    </div>
</template>

<script>
    import Form from '../services/Form'
    import _ from 'lodash'

    var cancel
    var CancelToken = axios.CancelToken

    export default {
        head: {
            title() {
                return {
                    inner: 'Customize'
                }
            }
        },

        data() {
            return {
                theme: {},
                form: null,
                url: '/customize',
                history: [],
                current: 0,
                window: 'desktop',
                showControls: true,
            }
        },

        computed: {
            isDesktop() {
                return this.window == 'desktop'
            },

            isTablet() {
                return this.window == 'tablet'
            },

            isMobile() {
                return this.window == 'mobile'
            },

            prettyURL() {
                let url = this.url.replace(/([^:]\/)\/+/g, "$1")
                return this.parseURL(url)
            },
        },

        watch: {
            'theme.option': {
                handler: function() {
                    this.update()
                },

                deep: true
            },
        },

        methods: {
            navigateBack() {
                if (this.history.length > 0) {
                    let current = this.current - 1
                    let url = this.history[(this.history.length - 1) + current]

                    if (url) {
                        this.current = current
                        this.url = url
                        this.update()
                    }
                }
            },

            navigateForward() {
                if (this.current !== 0) {
                    let current = this.current + 1
                    let url = this.history[(this.history.length - 1) + current]

                    if (url) {
                        this.current = current
                        this.url = url
                        this.update()
                    }
                }
            },

            navigateRefresh() {
                this.update()
            },

            navigateHome() {
                this.url = '/customize'
                this.update()
            },

            update: _.debounce(function() {
                if (cancel != undefined) {
                    cancel();
                }

                axios({
                    method: 'post',
                    url: this.url,
                    data: this.theme.option,
                    cancelToken: new CancelToken(function executer(c) {
                        cancel = c
                    })
                }).then(response => {
                    this.updateIframe(response.data)
                }).catch(err => {
                    if (axios.isCancel(err)) return;
                    throw err
                })
            }, 150),

            updateIframe(contents) {
                const iframe  = this.$refs.iframe

                iframe.contentWindow.document.open()
                iframe.contentWindow.document.write(contents)
                iframe.contentWindow.document.close()
            },

            onLoadIframe(event) {
                const iframe = this.$refs.iframe
                const url = iframe.contentWindow.location.toString()

                if (url == 'about:blank') {
                    this.url = '/customize'

                    if (this.history[this.history.length - 1] != this.url) {
                        this.history.push(this.url)
                        this.current = 0
                    }

                    this.update()
                } else if (!_.endsWith(url, '/customize')) {
                    this.url = url + '/customize'

                    if (this.history[this.history.length - 1] != this.url) {
                        this.history.push(this.url)
                        this.current = 0
                    }

                    this.update()
                }

                if (this.history[this.history.length + this.current] == this.url) {
                    this.current = this.current + 1
                }
            },

            parseURL(url) {
                let parser = document.createElement('a')
                parser.href = url

                return parser
            },

            submit() {
                this.form.patch('/api/themes/' + this.theme.namespace).then((response) => {
                    toast('Theme options have been updated', 'success')
                }).catch((error) => {
                    toast(error.response.data.message, 'failed')
                })
            },

            setWindow(device) {
                this.window = device
            },

            toggleControls() {
                this.showControls = !this.showControls

                this.$nextTick(function() {
                    if (this.showControls) {
                        this.$refs['hide-controls'].focus()
                    } else {
                        this.$refs['show-controls'].focus()
                    }
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/theme'),
            ]).then(axios.spread(function (theme) {
                next(function(vm) {
                    let options = theme.data.data.option

                    _.unset(options, '_json')

                    vm.theme = theme.data.data
                    vm.form = new Form(options, true)
                })
            }))
        },
    }
</script>