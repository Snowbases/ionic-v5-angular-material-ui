import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottomSheetExamplePage } from './bottom-sheet-example.page';

describe('BottomSheetExamplePage', () => {
  let component: BottomSheetExamplePage;
  let fixture: ComponentFixture<BottomSheetExamplePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          BottomSheetExamplePage
        ],
        imports: [
          IonicModule.forRoot()
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(BottomSheetExamplePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
