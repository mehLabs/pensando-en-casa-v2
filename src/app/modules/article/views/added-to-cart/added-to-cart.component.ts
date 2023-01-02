/* eslint-disable */

import { Component, OnDestroy } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { loadConfettiShape } from 'tsparticles-shape-confetti';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  DestroyType,
  StartValueType,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
@Component({
  selector: 'app-added-to-cart',
  templateUrl: './added-to-cart.component.html',
  styleUrls: ['./added-to-cart.component.css'],
})
export class AddedToCartComponent implements OnDestroy {
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  title = 'CodeSandbox';

  options = {
    fullScreen: {
      enable: false,
      zIndex: 100,
    },
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ['#00FFFC', '#FC00FF', '#fffc00'],
      },
      shape: {
        type: ['circle', 'square'],
        options: {},
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: StartValueType.max,
          destroy: DestroyType.min,
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 2,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 10,
        },
        speed: {
          min: 10,
          max: 20,
        },
        decay: 0.1,
        direction: MoveDirection.none,
        straight: false,
        outModes: {
          default: OutMode.destroy,
          top: OutMode.none,
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: 'random',
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: 'random',
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    emitters: {
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.4,
      },
      rate: {
        delay: 0.1,
        quantity: 50,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };

  constructor(private uiService: ResponsiveService) {
    uiService.hideHeader();
  }

  ngOnDestroy(): void {
    this.uiService.doShowHeader();
  }
  particlesLoaded(container: any): void {
    console.log(container);
  }

  async particlesInit(engine: any): Promise<void> {
    await loadFull(engine);
    let particles = document.querySelector('#tsparticles');
    particles?.classList.add('h-screen');
  }
}
