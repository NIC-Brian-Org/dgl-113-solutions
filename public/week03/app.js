let activities = [];

function addActivity() {
    let now = new Date();
    let theTime = now.toLocaleTimeString();

    let descriptionEl = document.getElementById('description');
    let description = descriptionEl.value;

    console.log( theTime, description );

    activities.push( `<li class="list-group-item">${theTime} ${description}</li>` );

    let activitiesEl = document.getElementById('activitylog');
    activitiesEl.innerHTML = activities.join('');
}

function removeActivity()
{
    activities.shift();

    let activitiesEl = document.getElementById('activitylog');
    activitiesEl.innerHTML = activities.join('');
}