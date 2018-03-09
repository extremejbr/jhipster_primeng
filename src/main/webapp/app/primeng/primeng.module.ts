
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TesteButtonDemoModule } from './buttons/button/buttondemo.module';
import { TesteSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { TesteDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { TesteConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { TesteLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { TesteTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { TesteOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { TesteSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { TesteKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { TesteInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { TesteInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { TesteInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { TesteCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { TesteCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { TesteChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { TesteColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { TesteInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { TesteInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { TestePasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { TesteAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { TesteSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { TesteSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { TesteRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { TesteSelectDemoModule } from './inputs/select/selectdemo.module';
import { TesteSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { TesteListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { TesteRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { TesteToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { TesteEditorDemoModule } from './inputs/editor/editordemo.module';

import { TesteGrowlDemoModule } from './messages/growl/growldemo.module';
import { TesteMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { TesteGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { TesteFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { TesteAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { TestePanelDemoModule } from './panel/panel/paneldemo.module';
import { TesteTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { TesteFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { TesteToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { TesteGridDemoModule } from './panel/grid/griddemo.module';
import { TesteScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { TesteCardDemoModule } from './panel/card/carddemo.module';

import { TesteDataTableDemoModule } from './data/datatable/datatabledemo.module';
import { TesteTableDemoModule } from './data/table/tabledemo.module';
import { TesteDataGridDemoModule } from './data/datagrid/datagriddemo.module';
import { TesteDataListDemoModule } from './data/datalist/datalistdemo.module';
import { TesteDataScrollerDemoModule } from './data/datascroller/datascrollerdemo.module';
import { TestePickListDemoModule } from './data/picklist/picklistdemo.module';
import { TesteOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { TesteScheduleDemoModule } from './data/schedule/scheduledemo.module';
import { TesteTreeDemoModule } from './data/tree/treedemo.module';
import { TesteTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { TestePaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { TesteGmapDemoModule } from './data/gmap/gmapdemo.module';
import { TesteOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { TesteCarouselDemoModule } from './data/carousel/carouseldemo.module';

import { TesteBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { TesteDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { TesteLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { TestePiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { TestePolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { TesteRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { TesteDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { TesteMenuDemoModule } from './menu/menu/menudemo.module';
import { TesteContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { TestePanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { TesteStepsDemoModule } from './menu/steps/stepsdemo.module';
import { TesteTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { TesteBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { TesteMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { TesteMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { TesteSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { TesteTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { TesteBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { TesteCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { TesteDeferDemoModule } from './misc/defer/deferdemo.module';
import { TesteInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { TesteProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { TesteRTLDemoModule } from './misc/rtl/rtldemo.module';
import { TesteTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { TesteValidationDemoModule } from './misc/validation/validationdemo.module';
import { TesteProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
    imports: [

        TesteMenuDemoModule,
        TesteContextMenuDemoModule,
        TestePanelMenuDemoModule,
        TesteStepsDemoModule,
        TesteTieredMenuDemoModule,
        TesteBreadcrumbDemoModule,
        TesteMegaMenuDemoModule,
        TesteMenuBarDemoModule,
        TesteSlideMenuDemoModule,
        TesteTabMenuDemoModule,

        TesteBlockUIDemoModule,
        TesteCaptchaDemoModule,
        TesteDeferDemoModule,
        TesteInplaceDemoModule,
        TesteProgressBarDemoModule,
        TesteInputMaskDemoModule,
        TesteRTLDemoModule,
        TesteTerminalDemoModule,
        TesteValidationDemoModule,

        TesteButtonDemoModule,
        TesteSplitbuttonDemoModule,

        TesteInputTextDemoModule,
        TesteInputTextAreaDemoModule,
        TesteInputGroupDemoModule,
        TesteCalendarDemoModule,
        TesteChipsDemoModule,
        TesteInputMaskDemoModule,
        TesteInputSwitchDemoModule,
        TestePasswordIndicatorDemoModule,
        TesteAutoCompleteDemoModule,
        TesteSliderDemoModule,
        TesteSpinnerDemoModule,
        TesteRatingDemoModule,
        TesteSelectDemoModule,
        TesteSelectButtonDemoModule,
        TesteListboxDemoModule,
        TesteRadioButtonDemoModule,
        TesteToggleButtonDemoModule,
        TesteEditorDemoModule,
        TesteColorPickerDemoModule,
        TesteCheckboxDemoModule,
        TesteKeyFilterDemoModule,

        TesteGrowlDemoModule,
        TesteMessagesDemoModule,
        TesteGalleriaDemoModule,

        TesteFileUploadDemoModule,

        TesteAccordionDemoModule,
        TestePanelDemoModule,
        TesteTabViewDemoModule,
        TesteFieldsetDemoModule,
        TesteToolbarDemoModule,
        TesteGridDemoModule,
        TesteScrollPanelDemoModule,
        TesteCardDemoModule,

        TesteBarchartDemoModule,
        TesteDoughnutchartDemoModule,
        TesteLinechartDemoModule,
        TestePiechartDemoModule,
        TestePolarareachartDemoModule,
        TesteRadarchartDemoModule,

        TesteDragDropDemoModule,

        TesteDialogDemoModule,
        TesteConfirmDialogDemoModule,
        TesteLightboxDemoModule,
        TesteTooltipDemoModule,
        TesteOverlayPanelDemoModule,
        TesteSideBarDemoModule,

        TesteDataTableDemoModule,
        TesteTableDemoModule,
        TesteDataGridDemoModule,
        TesteDataListDemoModule,
        TesteDataScrollerDemoModule,
        TesteScheduleDemoModule,
        TesteOrderListDemoModule,
        TestePickListDemoModule,
        TesteTreeDemoModule,
        TesteTreeTableDemoModule,
        TestePaginatorDemoModule,
        TesteOrgChartDemoModule,
        TesteGmapDemoModule,
        TesteCarouselDemoModule,
        TesteProgressSpinnerDemoModule

    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TesteprimengModule {}
