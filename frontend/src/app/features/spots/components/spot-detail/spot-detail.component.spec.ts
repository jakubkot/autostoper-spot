import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SpotDetailComponent } from '@features/spots/components/spot-detail/spot-detail.component';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import { htmlElement } from '@utils/functions/element';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';
import { MemoizedSelectorWithProps } from '@ngrx/store';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { SpotSelectors } from '@domains/spot/store/selectors';

describe('SpotDetailComponent', () => {
  let component: SpotDetailComponent;
  let fixture: ComponentFixture<SpotDetailComponent>;
  let dialogRef: SpyObj<MatDialogRef<SpotDetailComponent>>;
  let store: MockStore<SpotsState>;
  let selectSpotSelector: MemoizedSelectorWithProps<
    SpotsState,
    { id: number },
    SpotDomainModel
  >;

  beforeEach(async () => {
    dialogRef = createSpyObj<MatDialogRef<SpotDetailComponent>>('MatDialog', [
      'close',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SpotDetailComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        {
          provide: MatDialogRef,
          useValue: dialogRef,
        },
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  beforeEach(async () => {
    selectSpotSelector = store.overrideSelector(SpotSelectors.selectSpot, {
      id: 10,
      latitude: 50.203423,
      longitude: 20.042351,
    });
    fixture.detectChanges();
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should show title', () => {
    const title = htmlElement(
      fixture,
      '[data-test="5f5ab2ab-a6f1-47f9-b05f-629c356e35db"]',
    );

    expect(title).toBeTruthy();
  });

  it('should close after click on "Close" button', () => {
    const closeButton = htmlElement(
      fixture,
      '[data-test="392864b3-db5e-46a0-b7d1-688e30e3fd3d"]',
    );

    closeButton.click();

    expect(dialogRef.close).toHaveBeenCalled();
  });
});
