const fs = require('fs');

describe('Requirements', () => {
  it('Should initialize git', () => {
    expect(fs.existsSync('./.git')).toBe(true);
  });
  
  it('Should add the files to the staging area and commit them', () => {
    expect(fs.existsSync('./.git/COMMIT_EDITMSG')).toBe(true);
  })
})