const Mocha = require('mocha');
const assert = require('assert');
const mocha = new Mocha();

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

/**
 * Computes which IDs needs to be modified in database,
 * so database state will be the same as list given by the user.
 * 
 * If database contains element already, it needs to be updated anyway.
 * If two empty arrays given, throw an error.
 *
 * Example:
 *   listFromUser: [1, 2], listInDatabase: [1]
 *     => { insertOrUpdate: [1, 2], remove: [] }
 */

/*

{
1: false,
4: true,
}

{
1: true,
2: true,
}

output = {
    insertOrUpdate: [1, 2],
    remove: [4]
};

*/

function toMap(arr) {
  const map = {};
  
  arr.forEach(item => {
    map[item] = true
  });
  
  return map;
};


function computeDatabaseChanges(listFromUser, listInDatabase) {
  
  if (!listFromUser.length || !listInDatabase.length) throw new Error('Empty input');
  
  const mapUserList = toMap(listFromUser);
  const mapDBList = toMap(listInDatabase);
  
  // console.log(mapUserList, mapDBList);
  
  const insertOrUpdate = [];
  const remove = [];
  
  for (let item in mapUserList) {
    if (item in mapDBList) {
      mapDBList[item] = false;
    }
    insertOrUpdate.push(+item);
  }
  
  // console.log(mapUserList, mapDBList, insertOrUpdate);
  
  for (let item in mapDBList) {
    if (mapDBList[item]) {
      remove.push(+item);
    }
  }
  
  
  console.log(mapUserList, mapDBList, insertOrUpdate, remove);
  
  return {
    insertOrUpdate,
    remove,
  };
}

// assert.deepStrictEqual(actual, expected);

Mocha.describe("toMap", () => {
  Mocha.it("Should convert arr to map", () => {  
    const input = [1, 2, 3];
    const expectedOutput = { 1: true, 2: true, 3: true };
    assert.deepStrictEqual(toMap(input), expectedOutput);
  });  
});


Mocha.describe("computeDatabaseChanges", () => {
  Mocha.it("Should compute the diff correctly", () => {
    const listFromUser = [1, 2];
    const listInDatabase = [1, 3, 4];
    const expectedOutput = {
      insertOrUpdate: [1, 2],
      remove: [3, 4]
    };
      assert.deepStrictEqual(computeDatabaseChanges(listFromUser, listInDatabase), expectedOutput);
  });  
  
  // done(error?: Error)
  
  Mocha.it("Should compute the diff correctly for empty arrays", (_done) => {
    computeDatabaseChanges([], []);
    assert.deepStrictEqual(computeDatabaseChanges(listFromUser, listInDatabase), expectedOutput);
    // this still needs to be executed if the function about throws specific error
  });
});


mocha.run(); 