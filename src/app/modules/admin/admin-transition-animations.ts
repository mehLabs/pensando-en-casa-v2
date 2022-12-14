import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
} from '@angular/animations';
export const adminTransitionAnimations = trigger('routeAnimations', [
  transition('* => First', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '-100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('First => Second', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '-100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('Third => Second', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '-100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('First => Third', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '-100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('Second => Third', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '-100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('* => Last', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '-100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
  transition('Last => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }),
    ]),
    query(':enter', [style({ top: '-100%', opacity: 0 })]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ top: '100%' }))], {
        optional: true,
      }),
      query(':enter', [
        animate('300ms ease-out', style({ top: '0%', opacity: 1 })),
      ]),
    ]),
  ]),
]);
