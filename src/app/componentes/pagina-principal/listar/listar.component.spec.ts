import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponent } from './listar.component';
import { FirestoreService } from 'src/app/core/service/firestore.service';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListarComponent],
    providers:[FirestoreService,FirestoreModule]
  });
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
