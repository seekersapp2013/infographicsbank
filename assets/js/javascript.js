function updateData(id) {
    var state = ['none', 'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Basyelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Kastina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'F.C.T'];
    var total = ['none', 444, 400, 423, 332, 440, 392, 403, 396, 492, 384, 516, 425, 466, 417, 476, 446, 380, 459, 362, 392, 453, 455, 479, 368, 359, 377, 378, 468, 402, 447, 499, 366, 457, 398, 347, 371, 442];
    var completed = ['none', 334, 298, 307, 241, 300, 282, 278, 249, 387, 257, 382, 319, 354, 306, 332, 290, 208, 305, 204, 271, 292, 319, 320, 254, 236, 250, 220, 331, 243, 338, 386, 223, 332, 272, 234, 205, 320];
    var ongoing = ['none', 107, 98, 99, 81, 115, 81, 115, 85, 111, 146, 90, 114, 110, 104, 96, 108, 131, 148, 148, 138, 145, 105, 137, 116, 146, 108, 116, 106, 140, 116, 149, 99, 91, 128, 125, 116, 96, 143, 104];
    var not_started = ['none', 3, 4, 17, 10, 25, 25, 14, 1, 15, 13, 24, 2, 19, 3, 13, 8, 24, 16, 13, 16, 24, 20, 13, 6, 7, 21, 18, 21, 10, 10, 22, 15, 0, 10, 17, 23, 18];
    
    var state_field = document.getElementById('state_field');
    var state_field_2 = document.getElementById('state_field_2');
    var total_field = document.getElementById('total_field');
    var completed_field = document.getElementById('completed_field');
    var ongoing_field = document.getElementById('ongoing_field');
    var not_started_field = document.getElementById('not_started_field');

    if (id == 37) {
        state_field_2.innerHTML = '<br>';
    }
    else {
        state_field_2.innerHTML = 'STATE';
    };

    state_field.innerHTML = state[id];
    total_field.innerHTML = total[id];
    completed_field.innerHTML = completed[id];
    ongoing_field.innerHTML = ongoing[id];
    not_started_field.innerHTML = not_started[id];
}