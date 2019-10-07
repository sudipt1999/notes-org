import { Dropbox } from 'dropbox';
import $ from 'jquery';

const dbx = new Dropbox({ 
    accessToken: 'iyy5LHAnuaAAAAAAAAAAHyxpfUGVFfHPXdTj0bi9icYy8r-8YuEswJL8kuk0HhIR' 
});

dbx.filesListFolder({path: ''})
  .then(function(response) {
    if (response.entries) {
        response.entries.forEach(function(entry) {
            render(entry);
        });
    }
  })
  .catch(function(error) {
    console.log(error);
  });
  
function render(entry) {
    $('#myFiles').append(`<li class="${entry['.tag']}">${entry.name}</li>`);
}