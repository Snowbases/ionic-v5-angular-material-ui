import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog.component';

describe('DialogOverviewExampleDialogComponent', () => {
  let component: DialogOverviewExampleDialogComponent;
  let fixture: ComponentFixture<DialogOverviewExampleDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewExampleDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
