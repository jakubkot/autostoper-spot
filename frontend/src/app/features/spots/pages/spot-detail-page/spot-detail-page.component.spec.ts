import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SpotDetailPageComponent } from '@features/spots/pages/spot-detail-page/spot-detail-page.component';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { of } from 'rxjs';
import { NavigateService } from '@core/navigation/services/navigate.service';
import { QuickMapService } from '@shared/map/services/quick-map.service';
import { SpotDetailComponent } from '@features/spots/components/spot-detail/spot-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Coordinates } from '@shared/map/models/coordinates';
import { SpotDomainModel } from '@domains/spot/models/spot.domain.model';
import { MemoizedSelectorWithProps } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SpotSelectors } from '@domains/spot/store/selectors';
import { SpotsState } from '@domains/spot/store/entity/spots-state.interface';

describe('SpotDetailPageComponent', () => {
  let component: SpotDetailPageComponent;
  let fixture: ComponentFixture<SpotDetailPageComponent>;
  let dialog: SpyObj<MatDialog>;
  let navigateService: SpyObj<NavigateService>;
  let quickMapService: SpyObj<QuickMapService>;
  let store: MockStore<SpotsState>;
  let selectSpotSelector: MemoizedSelectorWithProps<
    SpotsState,
    { id: number },
    SpotDomainModel
  >;

  beforeEach(async () => {
    dialog = createSpyObj<MatDialog>('MatDialog', ['open']);
    navigateService = createSpyObj<NavigateService>('NavigateService', [
      'navigate',
    ]);
    quickMapService = createSpyObj<QuickMapService>('QuickMapService', [
      'center',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SpotDetailPageComponent],
      imports: [MatDialogModule, RouterTestingModule],
      providers: [
        {
          provide: MatDialog,
          useValue: dialog,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        {
          provide: MatDialogRef,
          useValue: createSpyObj<MatDialogRef<SpotDetailComponent>>(
            'MatDialogRef',
            ['afterClosed'],
          ),
        },
        {
          provide: NavigateService,
          useValue: navigateService,
        },
        {
          provide: QuickMapService,
          useValue: quickMapService,
        },
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpotDetailPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  beforeEach(async () => {
    selectSpotSelector = store.overrideSelector(SpotSelectors.selectSpot, {
      id: 10,
      latitude: 50.203423,
      longitude: 20.042351,
    });
    dialog.open.and.returnValue({
      afterClosed: () => of(void 0),
    } as MatDialogRef<SpotDetailComponent>);
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should open dialog', () => {
    fixture.detectChanges();

    expect(dialog.open).toHaveBeenCalled();
  });

  it('should navigate after closing the dialog', () => {
    fixture.detectChanges();

    expect(navigateService.navigate).toHaveBeenCalled();
  });

  it('should center map on spot', fakeAsync(() => {
    fixture.detectChanges();

    expect(quickMapService.center).toHaveBeenCalledWith(
      new Coordinates(50.203423, 20.042351),
    );
  }));
});
