

const repo = function() {
  const db = {};
  const  get = function(id) {
    console.log('Gettimg task' + id);
    return {
      name: 'new task form DB'
    }
  }

  const save =  function(task) {
    console.log('Saving '+ task.name + 'to the DB');
  }

  return {
    get: get,
    save: save,
  }
}

module.exports = repo();
