$('h1').addClass('big-title margin-20');

$('button').html('<em>Boomer</em>');

$('button').attr('alt', 'This is a button');

$('h1').click(function () {
  $('h1').css('color', 'limegreen');
});

$('button').click(function () {
  $('h1').css('color', 'orange');
  $('h1').toggle('see');
});

$('input').keypress((event) => {
  $('h1').text(event.key);
});

$('h1').on('mouseover', () => $('h1').css('color', 'white'));
$('h1').on('mouseout', () => $('h1').css('color', 'yellow'));

$('h1').before('<button>NEW before</button>');
$('h1').prepend('<button>NEW prepend</button>');
$('h1').append('<button>NEW append</button>');
$('h1').after('<button>NEW after</button>');

$('.div-btn').click(() => $('button').remove());
