// jQuery modal

$(document).ready(function(){
    $('.modal').modal();
  });


// jQuery collap

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

// jQuery select

  $(document).ready(function(){
    $('select').formSelect();
  });

// jQuery date picker 
  $(document).ready(function(){
    $('.datepicker').datepicker({ 
      firstDay: true, 
      yearRange: 2,
      //En español
      i18n: {
          months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
          monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
          weekdays: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
          weekdaysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
          weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
      }
  })
 });  ;
  
