<?php

 /*
|--------------------------------------------------------------------------
| DataTable Routes
|--------------------------------------------------------------------------
|
| Here is where you can register datatable routes for your application.
| These routes are loaded by the RouteServiceProvider within a group
| which is assigned the "api" middleware group. Enjoy building!
|
*/

Route::get('/activities', 'ActivityController@index');

Route::prefix('users')->group(function () {
    Route::get('/', 'UserController@index');
    Route::get('/{role}', 'UserController@index');
    Route::get('/{user}/activities', 'UserActivityController@index');

    // Bulk Actions
    Route::post('/actions/enable', 'UserController@enableAction');
    Route::post('/actions/disable', 'UserController@disableAction');
    Route::post('/actions/delete', 'UserController@deleteAction');
    Route::post('/actions/verify-email', 'UserController@verifyEmailAction');
    Route::post('/actions/reset-password', 'UserController@resetPasswordAction');
});

Route::get('/roles', 'RoleController@index');
Route::get('/roles/{role}/permissions', 'RolePermissionController@index');
Route::get('/permissions', 'PermissionController@index');
Route::get('/taxonomies', 'TaxonomyController@index');
Route::get('/mailables', 'MailableController@index');
Route::get('/forms', 'FormController@index');
Route::get('/navigation', 'NavigationController@index');
Route::get('/taxonomies/{taxonomy}', 'TermController@index');
Route::get('/matrices', 'MatrixController@index');
Route::get('/matrices/{matrix}/fields', 'MatrixFieldController@index');
Route::get('/collections/{collection}', 'CollectionController@index');
Route::get('/addons', 'AddonController@index');
Route::get('/backups', 'BackupController@index');
