import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    $(".coverage-menu").css("display", "none");
    $(document).ready(function () {
      $(".logiciels").click(function() {
        $(".item-div").css("position", "relative");
        $(".item-div").css("display", "flex");
        $(".item-div").css("justify-content", "center");
        $(".item-div").css("align-items", "center");
        $(".btn-logiciel").css("display", "block");
        $(".btn-formation").css("display", "none");
        $(".btn-audit").css("display", "none");
        $(".btn-store").css("display", "none");
      });

      $(".formations").click(function() {
        $(".item-div").css("position", "relative");
        $(".item-div").css("display", "flex");
        $(".item-div").css("justify-content", "start");
        $(".item-div").css("align-items", "start");
        $(".btn-logiciel").css("display", "none");
        $(".btn-formation").css("display", "block");
        $(".btn-audit").css("display", "none");
        $(".btn-store").css("display", "none");
      });

      $(".audits").click(function() {
        $(".item-div").css("position", "relative");
        $(".item-div").css("display", "flex");
        $(".item-div").css("justify-content", "center");
        $(".item-div").css("align-items", "end");
        $(".btn-logiciel").css("display", "none");
        $(".btn-formation").css("display", "none");
        $(".btn-store").css("display", "none");
        $(".btn-audit").css("display", "block");
      });

      $(".store").click(function() {
        $(".item-div").css("position", "relative");
        $(".item-div").css("display", "flex");
        $(".item-div").css("justify-content", "end");
        $(".item-div").css("align-items", "end");
        $(".btn-logiciel").css("display", "none");
        $(".btn-formation").css("display", "none");
        $(".btn-audit").css("display", "none");
        $(".btn-store").css("display", "block");
      });

      //MENU
      $(".Coverage-logo").click(function() {
        $(".coverage-base").css("display", "none");
        $(".coverage-menu").css("display", "flex");
        $(".coverage-menu").fadeIn(500);
      });
      $(".close-menu").click(function() {
        $(".coverage-base").css("display", "flex");
        $(".coverage-menu").css("display", "none");
        $(".coverage-menu").fadeOut(500);
      });
    })

  }
}
