// 'use strict';

// $(document).ready(function() {
//     let $block = null;

//     $('.ring').click(function() {
//         if ($block) {
//             $(this).append($block);
//             $block = null;
//         } else {
//             $block = $(this).children().first().detach().last();
//         }
//     })
// })





//Basic Drag and snap function

$(function() {
    $(".tower").children().first().draggable({ grid: [10, 10] }).last();
});