import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { QuickAddQuotasComponent } from './components/quick-add-quotas/quick-add-quotas.component';
import { LimeTranslatePipe } from './pipes/lime-translate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleComponent } from './components/style/style.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { SelectQuotaMembersComponent } from './components/select-quota-members/select-quota-members.component';
import { TranslationsInputComponent } from './components/translations-input/translations-input.component';

@NgModule({
  declarations: [
    QuickAddQuotasComponent,
    ModalComponent,
    LimeTranslatePipe,
    StyleComponent,
    AddQuestionsComponent,
    SelectQuotaMembersComponent,
    TranslationsInputComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    QuickAddQuotasComponent
  ]
})
export class QuickAddQuotasModule { }