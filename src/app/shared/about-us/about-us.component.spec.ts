import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutUsComponent } from './about-us.component';

fdescribe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;
  let debug: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h1');
    expect(e1.innerText).toEqual('About Us');
  }));

  it('should render title in a h5 tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h5');
    expect(e1.innerText).toEqual('Problem Statement');
  }));

  // it('should render title in a h5 tag', async(() => {
  //   fixture.detectChanges();
  //   const e1=fixture.nativeElement.querySelector('h5');
  //   expect(e1.innerText).toEqual('Project Definition');
  // }));

  // it('should render title in a h5 tag', async(() => {
  //   fixture.detectChanges();
  //   const e1=fixture.nativeElement.querySelector('h5');
  //   expect(e1.innerText).toEqual('Stakeholders');
  // }));

  // it('should render title in a h5 tag', async(() => {
  //   fixture.detectChanges();
  //   const e1=fixture.nativeElement.querySelector('h5');
  //   expect(e1.innerText).toEqual('Scope and Impact');
  // }));

  // it('should render title in a h5 tag', async(() => {
  //   fixture.detectChanges();
  //   const e1=fixture.nativeElement.querySelector('h5');
  //   expect(e1.innerText).toEqual('Features');
  // }));

  // it('should render title in a h5 tag', async(() => {
  //   fixture.detectChanges();
  //   const e1=fixture.nativeElement.querySelector('h5');
  //   expect(e1.innerText).toEqual('Functionalities');
  // }));
  
});