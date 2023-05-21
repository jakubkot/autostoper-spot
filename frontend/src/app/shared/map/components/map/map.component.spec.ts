import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import { of } from 'rxjs';
import { QuickMapService } from '@shared/map/services/quick-map.service';
import { Coordinates } from '@shared/map/models/coordinates';
import { MapComponent } from '@shared/map/components/map/map.component';
import { spyPropertyGetter } from '@utils/functions/spy-property-getter';

describe('MapComponent', () => {
  const spy = jasmine.createSpy();
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let quickMapService: SpyObj<QuickMapService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapComponent],
      providers: [
        {
          provide: QuickMapService,
          useValue: createSpyObj<QuickMapService>(
            'QuickMapService',
            ['center'],
            ['center$'],
          ),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
  });

  beforeEach(async () => {
    quickMapService = TestBed.inject(
      QuickMapService,
    ) as SpyObj<QuickMapService>;
  });

  it('should center map on spot', fakeAsync(() => {
    spyPropertyGetter(quickMapService, 'center$').and.returnValue(
      of(new Coordinates(50.203423, 20.042351)),
    );
    fixture.detectChanges();

    component.center$?.subscribe(spy);

    expect(spy).toHaveBeenCalledWith(new Coordinates(50.203423, 20.042351));
  }));
});
