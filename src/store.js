export default {
    "members": 
    [   {"id": 1, "name": "Bob", "email": "bob@gmail.com", "password": "password"},
        {"id": 2, "name": "Fred", "email": "fred@gmail.com", "password": "password"},
        {"id": 3, "name": "Stan", "email": "stan@gmail.com", "password": "password"},
        {"id": 4, "name": "Sally", "email": "sally@gmail.com", "password": "password"},
        {"id": 5, "name": "Deb", "email": "deb@gmail.com", "password": "password"},
        {"id": 6, "name": "Mary", "email": "mary@gmail.com", "password": "password"},
    ],

    "Calendars": 
    [   {"id": 1, "name": "Calendar1", "owner": 1},
        {"id": 2, "name": "Calendar2", "owner": 1},
        {"id": 3, "name": "Calendar3", "owner": 2}
        
    ],

    "member_calenders": 
    [   {"member_id": 1, "calendar_id": 1},
        {"member_id": 1, "calendar_id": 2},
        {"member_id": 1, "calendar_id": 3},
        {"member_id": 2, "calendar_id": 2},
        {"member_id": 2, "calendar_id": 3},
        {"member_id": 2, "calendar_id": 1},
        {"member_id": 3, "calendar_id": 1},
        {"member_id": 4, "calendar_id": 1},
        {"member_id": 5, "calendar_id": 2},
        {"member_id": 6, "calendar_id": 3},
    ],

    "events": 
    [   {"id": 1, "name": "Staff Meeting", "start": "2020-10-01 12:00:00", "end": "2020-10-01 13:00:00", "calendar_id": 1, "owner_id": 1},
        {"id": 2, "name": "Performance Review", "start": "2020-10-02 12:00:00", "end": "2020-10-02 13:00:00", "calendar_id": 2, "owner_id": 2},
        {"id": 3, "name": "Inventory", "start": "2020-10-04 12:00:00", "end": "2020-10-04 13:00:00", "calendar_id": 3, "owner_id": 2},
        
    ],

    "member_calenders": 
    [   {"member_id": 1, "event_id": 1},
        {"member_id": 2, "event_id": 2},
        {"member_id": 5, "event_id": 2},
        {"member_id": 3, "event_id": 1},
        {"member_id": 4, "event_id": 1},
        {"member_id": 5, "event_id": 1},
        {"member_id": 1, "event_id": 3},
        {"member_id": 2, "event_id": 3},
        
    ],
}