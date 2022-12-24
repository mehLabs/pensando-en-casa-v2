import { Component, OnDestroy } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
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
  particlesUrl = 'http://foo.bar/particles.json';
  title = 'CodeSandbox';
  options = {
    fpsLimit: 30,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 10,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
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
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
