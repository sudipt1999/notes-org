import { Dropbox } from 'dropbox';
import $ from 'jquery';

const dbx = new Dropbox({ 
    accessToken: 'iyy5LHAnuaAAAAAAAAAAHmK_m49-gfuzYmypDLR93PAMyf05sjMtx4dn0jnzk6i5' 
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