angular
  .module('myApp')
  .component('notesNew', {
    templateUrl: 'notesNew.template.html',
    controller: NotesNewController
  });

NotesNewController.$inject = ['$http', '$state'];

function NotesNewController($http, $state) {
  var vm = this;

  vm.note = {
    title: '',
    body: '',
    category: ''
  };

  vm.saveNote = saveNote;

  function saveNote() {
    $http.post('/api/notes/', vm.note).then(function(resp) {
      if(resp.status == 201) {
        $state.go('notesShow', { id: resp.data.id })
      } else {
        alert('Something went wrong when trying to create')
      }
    });
  }
}