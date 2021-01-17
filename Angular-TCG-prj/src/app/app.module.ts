import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list.component';
import { RecipeListComponent } from './modules/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './modules/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './modules/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './modules/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './modules/recipes/recipes.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './modules/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './modules/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
