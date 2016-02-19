$(document).ready(function () {
    //click handler for the destination dropdown menu
    $('#destination-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#destinationMenu .dropdown-button-text').text(value);
    });

    //click handler for the interests dropdown menu
    $('#interest-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#interestMenu .dropdown-button-text').text(value);
    });

    $('.submit').on('click', function () {
<<<<<<< HEAD

        var stateName = $('#desinationMenu .dropdown-button-text').text();
        var interestName = $('#interestMenu .dropdown-button-text').text();

        //changes the title of the modal to the state that was selected
        $('.modal-title').text(stateName);

        //changes the tab in the modal to the interest that was selected
        $('.active').removeClass('active'); //removes active class on any active tabs
        var interestDiv = interestName.toLowerCase() + 'Div'; //creates a string of the id name based on the value of the interest dropdown menu
        $('#'+interestDiv).addClass('active'); //adds class active to the div that holds the interest's content
        $('a[href="#'+ interestDiv +'"]').parent().addClass('active'); //adds class active to the li of the interest's tab

        //convert destination dropdown value to a variable name
        var stateObj;
        switch(stateName) {
            case 'California':
                stateObj = california;
                break;
            case 'New York':
                stateObj = newYork;
                break;
            case 'Florida':
                stateObj = florida;
                break;
        }

        showInterestContent(stateObj);

        //$('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
        //    //disney.postMap();
        //});
=======
        if ($('#destinationMenu .dropdown-button-text').text() == "Select a Destination" || $('#interestMenu .dropdown-button-text').text() == "Select an Interest") {
            return;
            console.log('prevented');
        }
        $('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
            disney.postMap();
        });
>>>>>>> 15d74b214bf15cab2f9732886a2fe99ab3f83b27
        $('#interestModal').modal('show'); //shows modal

    });
<<<<<<< HEAD
});
/*
@function showInterestContent
Loops through each interest in state, then loops through each attraction per interest, and displays the content for each attraction
params:
state: the state object variable name, taken from the value in the destination dropdown menu
 */
function showInterestContent(state) {
    for(var interest in state.interests) {

        var interestName = interest.charAt(0).toUpperCase() + interest.slice(1); //capitalize the first letter of the interest var name
        for(var i = 1; i <= 5; i++) { //loops through each attraction (top1, top2, etc.)

            state.interests[interest]['top'+i].postName(interestName, i);

            $('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
                state.interests[interest]['top'+i].postMap();

            });
            state.interests[interest]['top'+i].postPhotos(interestName, i);


        }
    }

}
=======

});
>>>>>>> 15d74b214bf15cab2f9732886a2fe99ab3f83b27
