
// # Instructor's Hints

// ## Date Object API

// I highly recommend that you guys use the date object as it is relatively easy
// to use and will be on more interviews than MomentJS will be. It is mainly
// because it is part of the native JS engine functionality.

// const time = new Date()
// const options = {
    //     weekday: "long",
    //     month: "long",
    //     day: "numeric",
    //     year: "numeric"
    // }
    // const display_time = time.toLocaleDateString('en-US', options)
    // console.log(display_time)
    
    // ```
    // var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "November", "Decmeber"];
    // var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var displayMonth = monthsArray[(new Date()).getMonth()];
    // var displayDay = daysArray[(new Date()).getDay()];
    // var displayDate = new Date().getDate()
    // var displayYear = new Date().getFullYear();
    // var currentDay = document.getElementById ("currentDay");
    // currentDay.textContent = `Today is ${displayDay}, ${displayMonth} ${displayDate}, ${displayYear}`;
    
    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar
    const display_time = moment().format("dddd, MMMM D, YYYY");
    currentDay.textContent = `Today is ${display_time}.`;
    
    // const currTime = new Date().getHours();
    const currTime = parseInt(moment().format("H"));
    const container = $(".container");
    
    const schedule = JSON.parse(localStorage.getItem("schedule"));
    if (!schedule) {
        schedule = [];
    }
    
    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours
    // WHEN I view the time blocks for that day
    for (let i = 8; i <= 17; i++) {
        const row = $('<div class="row time-block">');
        const hour = $('<div class="hour col-2">');
        const textarea = $('<textarea class="description col-8">');
        const btn = $('<button class="saveBtn col-2">');
        const icon = $('<i class="fas fa-save"></i>');
        
        btn.append(icon);
        row.append(hour, textarea, btn);
        container.append(row);
        
        const thisHour = moment(i, "H").format("h a");
        hour.text(thisHour);
        
        // THEN each time block is color-coded to indicate whether it is in the past, present, or future
        let timeClass = "past";
        if (i === currTime) timeClass = "present";
        if (i > currTime) timeClass = "future";
        // WHEN I click into a time block
        // THEN I can enter an event
        textarea.addClass(timeClass);
        textarea.val(schedule[thisHour]);
        
        // WHEN I click the save button for that time block
        //const saveBtn = $(".saveBtn");
        $(".saveBtn").on("click", function(event){
            let userInput = textarea.val();
            schedule [thisHour] = userInput;
            // THEN the text for that event is saved in local storage
            // WHEN I refresh the page
            // THEN the saved events persist
            localStorage.setItem("schedule", JSON.stringify(schedule));
    
        });  

        
    }
    
    
          

       
     

