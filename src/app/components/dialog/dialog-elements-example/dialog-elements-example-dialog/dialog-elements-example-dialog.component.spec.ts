import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogElementsExampleDialogComponent } from './dialog-elements-example-dialog.component';

describe('DialogElementsExampleDialogComponent', () => {
  let component: DialogElementsExampleDialogComponent;
  let fixture: ComponentFixture<DialogElementsExampleDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogElementsExampleDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogElementsExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
