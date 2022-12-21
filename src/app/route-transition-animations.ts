import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
} from '@angular/animations';
export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* => Home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 1,
      }),
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('Two => One', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ right: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ right: '0%' }))]),
    ]),
  ]),
  transition('One => Two', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
  ]),
  transition('* => ToRight', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%' })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
    ]),
  ]),
  transition('* => ToBottom', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 1,
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('1300ms ease-out', style({ top: '-100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('1300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('ToBottom => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '-100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '100%' }))]),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('* => ToUp', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '-100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '100%' }))]),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  // transition('* => NotFound', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //     }),
  //     query(':enter', [style({ transform: 'translateY(-100%)' })]),
  //     query(':leave', animateChild(), {optional:true}),
  //     group([
  //       query(':leave', [
  //         animate(
  //           '200ms ease-out',
  //           style({ transform: 'translateY(100%)', opacity: 0 })
  //         ),
  //       ]),
  //       query(':enter', [
  //         animate('300ms ease-out', style({ transform: 'translateY(0%)' })),
  //       ]),
  //     ]),
  //   ]),
  // ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%', opacity: 0 })),
      ]),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
