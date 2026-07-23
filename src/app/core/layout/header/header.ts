import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, HostListener, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;
  protected readonly menuOpen = signal(false);

  constructor() {
    this.destroyRef.onDestroy(() => this.renderer.removeClass(this.document.body, 'mobile-menu-open'));
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.closeMenu());
  }

  protected toggleMenu(): void {
    this.setMenuOpen(!this.menuOpen());
  }

  protected closeMenu(returnFocus = false): void {
    if (!this.menuOpen()) return;
    this.setMenuOpen(false);
    if (returnFocus) queueMicrotask(() => this.menuToggle?.nativeElement.focus());
  }

  @HostListener('document:keydown.escape')
  protected closeMenuOnEscape(): void {
    this.closeMenu(true);
  }

  private setMenuOpen(open: boolean): void {
    this.menuOpen.set(open);
    if (open) this.renderer.addClass(this.document.body, 'mobile-menu-open');
    else this.renderer.removeClass(this.document.body, 'mobile-menu-open');
  }
}
