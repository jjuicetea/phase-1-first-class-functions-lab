const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (function(){
    return drivers.slice(0,2);
    }
);


const returnLastTwoDrivers = (function(){
    return drivers.slice(2)
}
);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (function(){
    return createFareMultiplier;
});

const fare = 10; 

const fareDoubler = (function(){
    return fare * 2;
})

const fareValue = 12;

const fareTripler = (function(){
    return fareValue * 3;
})

const selectDifferentDrivers = function(){
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
}