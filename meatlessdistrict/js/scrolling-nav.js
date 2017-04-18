
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
  
  
});

const name = document.querySelector('.slide1');
const name2 = document.querySelector('.slide2');
const name3 = document.querySelector('.slide3');
const name4 = document.querySelector('.slide4');
const theDiv = document.querySelector('.items');

function replace1(){
  theDiv.innerHTML = `
    <div class="menu-items">

<div class="row">
        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>





</div> 

 
    </div>
  `;
}

function replace2(){
  theDiv.innerHTML = `
    <div class="menu-items">
<div class="row">
        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>


</div>




</div>
    </div>
  `;
}

function replace3(){
  theDiv.innerHTML = `
    <div class="menu-items">
<div class="row">
        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>

       <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto2">
</div>
<p class="titel"> Bitterballen (6 pieces) <span class="right1">&euro; 6,50</span> </p>
<p class="bodytext"> Mustard	&amp;	MDnaise	 </p>

</div>
</div>
    </div>
  `;
}

function replace4(){
  theDiv.innerHTML = `
    <div class="menu-items">
<div class="row">
  <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto">
</div>
<p class="titel"> Tasty	&amp; Healthy <span class="right1">&euro; 15,00</span> </p>
<p class="bodytext"> Yoghurt	with	fresh	fruit,	flaxseeds,	hempseeds,	raw	cacao,	goji	berries </p>

</div>
</div>





</div> 

 
    </div>
  `;
}

function replace2(){
  theDiv.innerHTML = `
    <div class="menu-items">
<div class="row">
        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>

        <div class="col-xs-12 col-s-6 col-sm-6 col-md-4 col-lg-4 ">  
<div class="menu-gerechten">
<div class="foto3">
</div>
<p class="titel"> Red wine <span class="right1">&euro; 8,15 </span> </p>
<p class="bodytext"> From the fields of paris </p>

</div>
</div>
    </div>
  `;
}



name.addEventListener('click', replace1);
name2.addEventListener('click', replace2);
name3.addEventListener('click', replace3);
name4.addEventListener('click', replace4);



