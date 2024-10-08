import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartnersComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(function () {
      $(".coverage-menu").css("display", "none");

      $(".Coverage-logo").click(function() {
        $(".coverage-menu").css("display", "flex");
        $(".coverage-menu").fadeIn(500);
      });
      $(".close-menu").click(function() {
        $(".coverage-menu").css("display", "none");
        $(".coverage-menu").fadeOut(500);
      });
    })

  }

}
