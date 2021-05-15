import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ListingRoutingModule } from "./listing-routing.module";
import { AllListingComponent } from "./all-listing/all-listing.component";
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AllListingComponent, ListingDetailComponent, AddListingComponent],
  imports: [CommonModule, ListingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListingModule {}
