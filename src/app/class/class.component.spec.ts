import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassComponent } from './class.component';

describe('ClassComponent', () => {
  let component: ClassComponent;
  let fixture: ComponentFixture<ClassComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("First Test using toBe",()=>{
    expect(component.componentName).toBe("Class")
  });

  it("Testing Addition with toBe",()=>{
    expect(component.Addition(30,30)).toEqual(60)
  });

  it("Testing substraction using toBe",()=>{
    expect(component.Substraction(60,40)).toBe(20)
  });

  it('Compare using tonotEqual',()=>{
    const A={id: 1, age: 22};
    const B ={ id: 2, age:4};
    expect(A).not.toEqual(B);
  })
  
  // it("Testing HTML using toContain",()=>{
  //   const data=fixture.nativeElement
  //   expect(data.querySelector(".some").textContent).toContain("class")
  // });
  // it("Testing HTML Element",()=>{
  //   const data=fixture.nativeElement
  //   expect(data.querySelector(".some").textContent).toContain("Class")
  // })
 xit("Testing HTML Element",()=>{
    const data=fixture.nativeElement
    expect(data.querySelector(".some").textContent).toContain("class")
  })


  it('Testing String "toBe" for matcher ==', ()=>{
    let firstStr = 'Hello World';
    expect(firstStr).toBe('Hello World'); //.not
  });

  it('Testing Array Using "toEqual",array should be equal ',()=>{
      let a = [1,2,3];
      expect(a).toEqual([1,2,3]);
  });

});

