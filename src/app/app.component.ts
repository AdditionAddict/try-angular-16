import {
  Component,
  signal,
  effect,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Classic Signal</h1>

    Count: {{ count() }}
    <hr />
    Double count: {{ doubleCount() }}
    <hr />
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  count = signal(0);
  doubleCount = computed(() => 2 * this.count());

  result = effect(() => {
    console.log(`Effect::${this.count()}`);
  });

  increment() {
    this.count.update((c) => c + 1);
    console.log(`increment::${this.doubleCount()}`);
  }

  decrement() {
    this.count.update((c) => c - 1);
    console.log(`decrement::${this.doubleCount()}`);
  }
}
