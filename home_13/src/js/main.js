//jquery function click-listener button Add to show input "enter your new task"
$('.buttnAdd').click(function () {
  $('.form-control').fadeIn('slow', function () {
  })
})

//jquery function click-listener input "enter your new task" to show buttons Save, Clear and heading actual list
$('.form-control').click(function () {
  $('.buttnSave, .buttnClear, .heading').fadeIn('slow', function () {
  })
})

//jquery function click-listener button Save for add new task to the actual list
$('.buttnSave').click(function () {
  let valueTask = $('.form-control').val()
  if (!valueTask) {                           //empty task input validation
    alert('Please, enter your new task!')
  } else {
    $('.addedTask').prepend('<li class="border rounded itemTask">'+'<p class="textTask">'+valueTask+'</p>'+ // send new task to the actual list
      '<div class="d-inline">'+
      '<button class="btn btn-outline-secondary buttnEdit">Edit</button>'+
      '<button class="btn btn-outline-danger buttnDel">Del</button>'+'</div>'+
      '</li>')

    $('.form-control').val('')                            // clear input
  }
})

//jquery function click-listener button Clear
$('.buttnClear').click(function () {
  valueTask =''
  $('.form-control').val(valueTask)
})

//jquery function click-listener button Edit to correct saved task
$('body').on('click', '.buttnEdit', function() {
  if (confirm('Correct this task')){
    $('.textTask').attr('contenteditable', true)
  }
})

//jquery function click-listener button Del,  using .on() to delegate click event to exist element - body
$('body').on('click', '.buttnDel', function() {
  if (confirm('You want remove this task from list! Are you sure?')){
    $(this).parents('.itemTask').remove()
  }
})


