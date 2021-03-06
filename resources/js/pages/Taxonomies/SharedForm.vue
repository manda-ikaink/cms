<template>
    <form-container>
        <portal to="actions">
            <div class="buttons">
                <ui-button :to="{ name: 'taxonomies' }" variant="secondary">Go Back</ui-button>
                <ui-button variant="primary" type="submit" @click.prevent="submit" :disabled="!form.hasChanges">Save</ui-button>
            </div>
        </portal>

        <section-card title="General Information" description="General information about this taxonomy and what it organizes.">
            <ui-input-group
                name="name"
                label="Name"
                help="What should this taxonomy be called?"
                autocomplete="off"
                autofocus
                required
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </ui-input-group>

            <ui-textarea-group
                name="description"
                label="Description"
                help="Give a short description of what this taxonomy will organize and store."
                autocomplete="off"
                :has-error="form.errors.has('description')"
                :error-message="form.errors.get('description')"
                v-model="form.description">
            </ui-textarea-group>
        </section-card>

        <section-card title="Routing" description="Configure how terms within this taxonomy will be accessed on the frontend.">
            <ui-input-group
                name="route"
                label="Route"
                help="When the URI matches this pattern..."
                autocomplete="off"
                monospaced
                :has-error="form.errors.has('route')"
                :error-message="form.errors.get('route')"
                v-model="form.route">
            </ui-input-group>

            <ui-input-group
                name="template"
                label="Template"
                help="Render this template"
                autocomplete="off"
                monospaced
                :has-error="form.errors.has('template')"
                :error-message="form.errors.get('template')"
                v-model="form.template">
            </ui-input-group>
        </section-card>

        <template v-slot:sidebar>
            <div class="card">
                <div class="card__body">
                    <ui-slug-group
                        name="handle"
                        label="Handle"
                        monospaced
                        autocomplete="off"
                        required
                        :watch="form.name"
                        delimiter="_"
                        :has-error="form.errors.has('handle')"
                        :error-message="form.errors.get('handle')"
                        v-model="form.handle">
                    </ui-slug-group>
                </div>
            </div>

            <div class="card">
                <div class="card__body">
                    <icon-picker
                        name="icon"
                        label="Icon"
                        placeholder="Search icons..."
                        help="Choose an icon that best represents your taxonomy."
                        :has-error="form.errors.has('icon')"
                        :error-message="form.errors.get('icon')"
                        required
                        v-model="form.icon">
                    </icon-picker>

                    <ui-toggle
                        name="sidebar"
                        label="Show in Sidebar"
                        v-model="form.sidebar"
                        :true-value="1"
                        :false-value="0">
                    </ui-toggle>
                </div>
            </div>

            <ui-definition-list v-if="taxonomy">
                <ui-definition name="Created At">
                    {{ $moment(taxonomy.created_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>

                <ui-definition name="Updated At">
                    {{ $moment(taxonomy.updated_at).format('Y-MM-DD, hh:mm a') }}
                </ui-definition>
            </ui-definition-list>
        </template>
    </form-container>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        props: {
            form: {
                type: Object,
                required: true,
            },

            taxonomy: {
                type: Object,
                required: false,
            },

            submit: {
                required: true,
            }
        },
    }
</script>