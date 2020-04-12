import { Component, OnInit, Input } from "@angular/core";
import { Player } from "../models/three-in-line";

@Component({
  selector: "app-three-player",
  templateUrl: "./three-player.component.html",
  styleUrls: ["./three-player.component.scss"],
})
export class ThreePlayerComponent implements OnInit {
  @Input() player!: Player;

  constructor() {}

  ngOnInit() {}
}
