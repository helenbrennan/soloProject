// /**
//  * Edits an employee and checks that the edit stuck.
//  * 
//  * @param {object} pageObject the page object currently being used
//  * @param {string} oldEmployee the name of the employee to be edited
//  * @param {object} newEmployee {name: '', phone: '', title: ''} - the values desired post-edit
//  * @param {string} otherEmployee the name of another employee not involved in the edit
//  */
// module.exports = (pageObject, oldEmployee, newEmployee, otherEmployee) => {
//     pageObject
//         .clickEmployee(oldEmployee)
//         .editEmployee(newEmployee)
//         .click('@saveButton')
//         .clickEmployee(otherEmployee)
//         .expect.element('@cardTitle').text.to.equal(otherEmployee).before(500)
//     pageObject
//         .clickEmployee(newEmployee.name)
//         .expect.element('@cardTitle').text.to.equal(newEmployee.name).before(500)
//     pageObject.expect.element('@nameField').value.to.equal(newEmployee.name)
//     pageObject.expect.element('@phoneField').value.to.equal(newEmployee.phone)
//     pageObject.expect.element('@titleField').value.to.equal(newEmployee.title)
// }

var externalLinks = function (pageObject, smLink) {
    pageObject
        .click(smLink)
        .verify.urlContains(smLink.link)
    pageObject
        .closeWindow();
}
module.exports = [
    {selector: '@facebook', name:'facebook'},
    {selector: '@twitter', name:'twitter'},
    {selector: '@instagram', name:'instagram'},
    {selector: '@linkedIn', name:'linkedin'},
    {selector: '@youTube', name:'youtube'},
    {selector: '@msConnection', name:'msconnection'}

]