let url = 'http://localhost:3000/courses/';
tableEl = document.getElementById('table');
window.onload = getCourses();
function getCourses(){

    fetch(url, {
		method: 'GET',
	}).then(response => response.json())
    .then(data => {

        data.forEach(course => {
            tableEl.innerHTML += `
     <tr>     
     <td>${course.id}</td>
     <td>${course.courseId}</td>
     <td>${course.courseName}</td>
     <td>${course.coursePeriod}</td>

     <td><button onclick= deleteCourse(${course.id});>X</button></td>
   </tr>
   `
        })

    
        console.log(data);
    }).catch(error => {
		console.log('Error: ', error)
	})


    }


   function deleteCourse(id) {
    /*Send parameters telling the web service what
    table and row should be updated */
	fetch(url + id, {
		method: 'DELETE',
	}).then(response => response.json()).then(data => {

		location.reload()
	}).catch(error => {
		console.log('Error: ', error)
	})
}
