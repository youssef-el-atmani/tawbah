import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
} from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-join-momahidoun',
  imports: [
    ReactiveFormsModule,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
    NgSelectComponent,
  ],
  templateUrl: './join-momahidoun.component.html',
  styleUrl: './join-momahidoun.component.scss',
})
export class JoinMomahidounComponent {
  private formBuilder = inject(FormBuilder);

  momahidForm: FormGroup = new FormGroup({
    momahidName: new FormControl('', Validators.required),
    momahidAge: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    isMomahidMarried: new FormControl(),
    isMomahidStudy: new FormControl(),
    momahidCountry: new FormControl(),
    momahidTypeOfWorkStudy: new FormControl(),

    // ----
    momahidAgeWhenFirstInteractWithPorn: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    momahidAddictionDuration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    momahidPornDiscovery: new FormControl('', Validators.required),

    // ----
    previousFailedAttempts: new FormControl('', Validators.required),
    lifeDuringAddiction: new FormControl('', Validators.required),
    // withdrawal symptoms
    cravingToWatchPorn: new FormControl(false),
    sexWakingDreams: new FormControl(false),
    pornScenesCrossMind: new FormControl(false),

    fastAnger: new FormControl(false),
    exaggeratedSensitivity: new FormControl(false),

    laziness: new FormControl(false),
    overeating: new FormControl(false),

    delirium: new FormControl(false),

    // Dynamic withdrawals symptoms added by the momahid if he has any
    additionalWithdrawalSymptoms: this.formBuilder.array([]),

    // ----
    lifeAfterTrueTawbah: new FormControl('', Validators.required),
    majorWorshipsThatHealedTheHeart: new FormControl('', Validators.required),
    majorSinsThatPoisonedTheHeart: new FormControl(),
    messageForMomahidBrother: new FormControl(),
  });

  arWorldCountries = [
    'أفغانستان',
    'ألبانيا',
    'الجزائر',
    'ساموا الأمريكية',
    'أندورا',
    'أنغولا',
    'أنغويلا',
    'القارة القطبية الجنوبية',
    'أنتيغوا وباربودا',
    'الأرجنتين',
    'أرمينيا',
    'أروبا',
    'أستراليا',
    'النمسا',
    'أذربيجان',
    'باهاماس',
    'البحرين',
    'بنغلاديش',
    'باربادوس',
    'روسيا البيضاء',
    'بلجيكا',
    'بليز',
    'بنين',
    'برمودا',
    'بوتان',
    'بوليفيا',
    'البوسنة والهرسك',
    'بوتسوانا',
    'جزيرة بوفيه',
    'البرازيل',
    'إقليم المحيط الهندي البريطاني',
    'بروناي',
    'بلغاريا',
    'بوركينا فاسو',
    'بوروندي',
    'كمبوديا',
    'الكاميرون',
    'كندا',
    'الرأس الأخضر',
    'جزر كايمان',
    'جمهورية أفريقيا الوسطى',
    'تشاد',
    'تشيلي',
    'الصين',
    'جزيرة عيد الميلاد',
    'جزر كوكوس',
    'كولومبيا',
    'جزر القمر',
    'جمهورية الكونغو',
    'جمهورية الكونغو الديمقراطية',
    'جزر كوك',
    'كوستاريكا',
    'ساحل العاج',
    'كرواتيا',
    'كوبا',
    'قبرص',
    'جمهورية التشيك',
    'الدنمارك',
    'جيبوتي',
    'دومينيكا',
    'جمهورية الدومينيكان',
    'الإكوادور',
    'مصر',
    'السلفادور',
    'غينيا الاستوائية',
    'إريتريا',
    'إستونيا',
    'إثيوبيا',
    'جزر فوكلاند',
    'جزر فارو',
    'فيجي',
    'فنلندا',
    'فرنسا',
    'غويانا الفرنسية',
    'بولينزيا الفرنسية',
    'أراض فرنسية جنوبية وأنتارتيكية',
    'الغابون',
    'غامبيا',
    'جورجيا',
    'ألمانيا',
    'غانا',
    'جبل طارق',
    'اليونان',
    'جرينلاند',
    'غرينادا',
    'غوادلوب',
    'غوام',
    'غواتيمالا',
    'غينيا',
    'غينيا بيساو',
    'غيانا',
    'هايتي',
    'جزيرة هيرد وجزر ماكدونالد',
    'الفاتيكان',
    'هندوراس',
    'هونغ كونغ',
    'المجر',
    'آيسلندا',
    'الهند',
    'إندونيسيا',
    'إيران',
    'العراق',
    'أيرلندا',
    'إيطاليا',
    'جامايكا',
    'اليابان',
    'الأردن',
    'كازاخستان',
    'كينيا',
    'كيريباتي',
    'كوريا الشمالية',
    'كوريا الجنوبية',
    'الكويت',
    'قيرغيزستان',
    'لاوس',
    'لاتفيا',
    'لبنان',
    'ليسوتو',
    'ليبيريا',
    'ليبيا',
    'ليختنشتاين',
    'ليتوانيا',
    'لوكسمبورغ',
    'ماكاو',
    'مقدونيا الشمالية',
    'مدغشقر',
    'مالاوي',
    'ماليزيا',
    'جزر المالديف',
    'مالي',
    'مالطا',
    'جزر مارشال',
    'مارتينيك',
    'موريتانيا',
    'موريشيوس',
    'مايوت',
    'المكسيك',
    'ولايات ميكرونيسيا المتحدة',
    'مولدوفا',
    'موناكو',
    'منغوليا',
    'مونتسرات',
    'المغرب',
    'موزمبيق',
    'بورما',
    'ناميبيا',
    'ناورو',
    'نيبال',
    'هولندا',
    'كاليدونيا الجديدة',
    'نيوزيلندا',
    'نيكاراغوا',
    'النيجر',
    'نيجيريا',
    'نييوي',
    'جزيرة نورفولك',
    'جزر ماريانا الشمالية',
    'النرويج',
    'عمان',
    'باكستان',
    'بالاو',
    'فلسطين',
    'بنما',
    'بابوا غينيا الجديدة',
    'باراغواي',
    'بيرو',
    'الفلبين',
    'جزر بيتكيرن',
    'بولندا',
    'البرتغال',
    'بورتوريكو',
    'قطر',
    'لا ريونيون',
    'رومانيا',
    'روسيا',
    'رواندا',
    'سانت هيلينا وأسينشين وتريستان دا كونا',
    'سانت كيتس ونيفيس',
    'سانت لوسيا',
    'سان بيير وميكلون',
    'سانت فينسنت والغرينادين',
    'ساموا',
    'سان مارينو',
    'ساو تومي وبرينسيب',
    'السعودية',
    'السنغال',
    'سيشل',
    'سيراليون',
    'سنغافورة',
    'سلوفاكيا',
    'سلوفينيا',
    'جزر سليمان',
    'الصومال',
    'جنوب أفريقيا',
    'جورجيا الجنوبية وجزر ساندويتش الجنوبية',
    'إسبانيا',
    'سريلانكا',
    'السودان',
    'سورينام',
    'سفالبارد ويان ماين',
    'سوازيلاند',
    'السويد',
    'سويسرا',
    'سوريا',
    'تايوان',
    'طاجيكستان',
    'تانزانيا',
    'تايلاند',
    'تيمور الشرقية',
    'توغو',
    'توكيلاو',
    'تونغا',
    'ترينيداد وتوباغو',
    'تونس',
    'تركيا',
    'تركمانستان',
    'جزر توركس وكايكوس',
    'توفالو',
    'أوغندا',
    'أوكرانيا',
    'الإمارات العربية المتحدة',
    'المملكة المتحدة',
    'الولايات المتحدة',
    'جزر الولايات المتحدة',
    'الأوروغواي',
    'أوزبكستان',
    'فانواتو',
    'فنزويلا',
    'فيتنام',
    'جزر العذراء البريطانية',
    'جزر العذراء الأمريكية',
    'والس وفوتونا',
    'الصحراء الغربية',
    'اليمن',
    'زامبيا',
    'زيمبابوي',
    'جزر أولاند',
    'الجزر الكاريبية الهولندية',
    'كوراساو',
    'غيرنزي',
    'جزيرة مان',
    'جيرزي',
    'الجبل الأسود',
    'سان بارتيلمي',
    'سانت مارتن (الجزء الفرنسي)',
    'صربيا',
    'سانت مارتن (الجزء الهولندي)',
    'جنوب السودان',
    'كوسوفو',
  ];

  // For generating dynamic withdrawal symptoms inputs
  get additionalWithdrawalSymptoms(): FormArray {
    return this.momahidForm.get('additionalWithdrawalSymptoms') as FormArray;
  }

  addWithdrawalSymptom() {
    this.additionalWithdrawalSymptoms.push(this.formBuilder.control(''));
  }

  // For removing the new created input fields for the additionalWithdrawalSymptoms
  removeWithdrawalSymptom(index: number) {
    this.additionalWithdrawalSymptoms.removeAt(index);
  }

  // These getters used for the validations
  get momahidName() {
    return this.momahidForm.get('momahidName');
  }

  get momahidAge() {
    return this.momahidForm.get('momahidAge');
  }

  get momahidAgeWhenFirstInteractWithPorn() {
    return this.momahidForm.get('momahidAgeWhenFirstInteractWithPorn');
  }

  get momahidAddictionDuration() {
    return this.momahidForm.get('momahidAddictionDuration');
  }

  get momahidPornDiscovery() {
    return this.momahidForm.get('momahidPornDiscovery');
  }

  get previousFailedAttempts() {
    return this.momahidForm.get('previousFailedAttempts');
  }

  get lifeDuringAddiction() {
    return this.momahidForm.get('lifeDuringAddiction');
  }

  get lifeAfterTrueTawbah() {
    return this.momahidForm.get('lifeAfterTrueTawbah');
  }

  get majorWorshipsThatHealedTheHeart() {
    return this.momahidForm.get('majorWorshipsThatHealedTheHeart');
  }

  get majorSinsThatPoisonedTheHeart() {
    return this.momahidForm.get('majorSinsThatPoisonedTheHeart');
  }

  get messageForMomahidBrother() {
    return this.momahidForm.get('messageForMomahidBrother');
  }

  // #########################################
  // Submitting The Form
  // #########################################
  constructor(private http: HttpClient) {}

  submitAttempted = signal(false);

  submitMomahidRequest() {
    this.submitAttempted.set(true);

    if (this.momahidForm.invalid) {
      this.momahidForm.markAllAsTouched(); // show validation errors
      // alert('الرجاء ملء الحقول المطلوبة');
      return;
    }

    const storyMacroInfo = {
      pageLanguage: 'ar',
      isStoryApproved: false,
      isStoryVerified: false,
    };
    const momahidFormInput = this.momahidForm.value;

    const newMomahidData = { ...storyMacroInfo, ...momahidFormInput };

    this.http
      .post('http://localhost:3000/al-momahidoun', newMomahidData)
      .subscribe((res: any) => alert('تم استقبال طلبك بنجاح'));
  }
}
