angular
  .module('myApp')
  .component('notesEdit', {
    templateUrl: 'notesEdit.template.html',
    controller: NotesEditController
  });

NotesEditController.$inject = ['$http', '$stateParams', '$state'];

function NotesEditController($http, $stateParams, $state) {
  var vm = this;

  vm.saveNote = saveNote;

  $http.get('/api/notes/' + $stateParams.id).then(function(resp) {
    vm.note = resp.data;
  });

  function saveNote() {
    $http.put('/api/notes/' + $stateParams.id, vm.note).then(function(resp) {
      if(resp.status == 200) {
        $state.go('notesShow', { id: $stateParams.id })
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}