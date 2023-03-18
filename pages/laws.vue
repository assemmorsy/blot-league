<template>
    <div class="accordion accordion-flush" id="accordionPanels">
        <div class="accordion-item">
            <h2 class="accordion-header" id="panel-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panel-collapseOne">
                    <Icon name="ic:twotone-menu-book" size="25" class="mx-2 head-icon" />
                    قواعد اللعبة
                </button>
            </h2>
            <div id="panel-collapseOne" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <ol>
                        <li>قبل بدأ أي مباراة يجري الحكم قرعة لتحديد مكان جلوس كل فريق.</li>
                        <li> تبدأ المباراة بالمكابر و صاحب الورقة الأكبر هو من يبدأ بالتوزيع.</li>
                        <li> كتيب قوانين البلوت هو المرجع الرسمي للبطولة.</li>
                        <li> توضيح اللعب أو الغش يعتبر حالات تقديرية ترجع للحكم.</li>
                        <li>يمنع تغيير مكان اللاعبين داخل الصكة.</li>
                        <li>يسمح بتغيير اماكن اللاعبين بعد انتهاء الصكة.</li>
                        <li>قبل بدأ المباراة بــــ 15 دقيقة يقوم كابتن الفريق برفع أسماء اللاعبين المشاركين في الصكة الأولى
                            من المباراة.</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo">
                    <Icon name="material-symbols:library-books-outline" size="25" class="mx-2 head-icon" />
                    بنود عامة
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <ol>
                        <li>
                            في حال تأخر الفريق 20 دقيقة عن موعد المباراة يعتبر الفريق مهزوما 2-0 و كل صكة يتم تسجيلها 152-0

                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree">
                    <Icon name="fluent-mdl2:decision-solid" size="25" class="mx-2 head-icon" />
                    حكام البطولة
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <h6 class="fs-4 mb-3 sub-header"> الحكام المتواجدين</h6>
                    <ol>
                        <li>حكم طاولة.</li>
                        <li>حكم لجنة (متابعة لعب).</li>
                        <li>حكم لجنة (متابعة نشرة).</li>
                    </ol>
                    <hr>
                    <h6 class="fs-4 mb-3 sub-header"> مهام الحكام في البطولة</h6>
                    <ol>
                        <li>حكم الطاولة هو المرجع للاعبين في حال الخلاف ولا يتدخل إلا بعد طلب اللاعبين الفصل بينهم.</li>
                        <li>حكم الطاولة يقوم بتسجيل النشرة بعد طلب تسجيلها من الفريق المشتري.</li>
                        <li> الحكام المساعدين تكمن مهمتهم بمتابعة مجريات اللعب و متابعة نشرة اللعب.</li>
                        <li> في حال الخلاف بين أعضاء الحكام في القرار يتم التصويت على القرار ويفصل بينهم قرار الحكم.</li>
                        <li>يحق للفريق لمرة واحدة في كل صكة طلب النظر في قرار الحكم و يحال القرار للجنة.</li>
                        <li> يحق للحكم الرجوع للجنة الحكم عندما يشاء للتأكد من قراره.</li>
                        <li>الحكم المساعد (متابعة اللعب) يقبل تدخله في حالة الغش فقط.</li>
                        <li>الحكم المساعد (متابعة النشرة) يقبل تدخله في حالة وجود خطأ بالنشرة.</li>
                        <li>حالات توضيح اللعب أو الغش تعتبر قياسية لدى الحكم و يحق له رفضها في حال لم يرى فيها ما يؤثر على
                            اللعب.</li>
                    </ol>

                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour">
                    <Icon name="mdi:cards" size="25" class="mx-2 head-icon" />

                    إجراءات الانذارات
                </button>
            </h2>

            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                <div class="accordion-body p-0 m-0">
                    <div class="card rounded-0">
                        <div class="accordion accordion-flush" id="accordionPanels-warnings">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsWarning-headingOne">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsWarning-collapseOne">
                                        حالات الكرت الأصفر
                                        <Icon name="mdi:cards-outline" size="25" class="mx-2 text-warning" />
                                    </button>
                                </h2>
                                <div id="panelsWarning-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <ol>
                                            <li>تكرار الاحتجاج على الحكم.</li>
                                            <li>خلاف شديد اللهجة بين أعضاء الفريق نفسه.</li>
                                            <li>رمي احد اللاعبين للورق أو أي شيء آخر خارج الميدان بطريقة غير مقصودة.</li>
                                            <li>في حال توضيح اللعب من احد اللاعبين و تم احتساب قيد عليه ينذر الحكم اللاعب
                                                شفهيا
                                                وفي حال تكرار
                                                ذلك للمرة
                                                الثانية في نفس المباراة ينذر بالكرت الاصفر.</li>
                                            <li>في حال لمس اللاعب البديل طاولة اللعب.</li>
                                            <li>في حال تأخير اللعب من أحد اللاعبين متعمداً ينذر شفهياً و في حال تكرار ذلك
                                                ينذر
                                                بكرت اصفر.</li>
                                            <li>
                                                في حال توضيح اللعب من اللاعب البديل بشكل خفي خلال اللعب و لم يستفد فريقه:
                                                <br>
                                                مثل ( تغيير ملامح الوجه و
                                                الابتسامة ) يستمر اللعب و بعد انتهاء اللعبة و يشهر الحكم بطاقة صفراء على
                                                اللاعب
                                                الذي قام بتوضيح
                                                اللعب.
                                            </li>
                                            <li>
                                                بعد انتهاء الجولة و قبل العد او بعد العد لا يحق للاعب البديل الكلام فيما يخص
                                                نشرة اللعب مثل
                                                ( تذكير فريقه بمشروعه او التعديل بالزيادة او النقصان على النشرة ) و في حال
                                                تم
                                                ذلك
                                                بشكل علني :
                                                <br>
                                                <span class="rounded definition">بعد العد</span> يتم حرمان فريقه من الزيادة
                                                التي
                                                ذكرها
                                                اللاعب ويتم إنذاره
                                                بكرت اصفر.
                                                <br>
                                                <span class="rounded definition">قبل العد</span> يتم تسجيلها لفريقه بدون
                                                مشاريع
                                                و بدون
                                                دبل ويتم إنذاره
                                                بكرت اصفر.

                                            </li>

                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsWarning-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsWarning-collapseTwo">
                                        إجراءات الكرت الأصفر
                                        <Icon name="fluent-mdl2:decision-solid" size="25" class="mx-2 text-warning" />
                                    </button>
                                </h2>
                                <div id="panelsWarning-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ol>
                                            <li>إذا تلقى اللاعب كرتين أصفر في نفس المباراة يطرد مباشرة بكرت احمر.</li>
                                            <li>في حال تراكم 3 بطاقات صفراء على اللاعب في المباريات السابقة يحرم اللاعب من
                                                المشاركة في الصكة
                                                الأولى من
                                                المباراة القادمة.</li>
                                            <li> في حال مشاركة أي لاعب في المباراة و هو يحمل 3 كروت صفراء أو احمر في
                                                المباريات
                                                السابقة يعتبر الفريق مهزوما بــــ 152 - 0 في تلك الصكة.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsWarning-headingThird">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsWarning-collapseThird">
                                        حالات الكرت الاحمر
                                        <Icon name="mdi:cards-outline" size="25" class="mx-2 text-danger" />
                                    </button>
                                </h2>
                                <div id="panelsWarning-collapseThird" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ol>
                                            <li>اذا قام بالضرب او الاعتداء أو السب و الشتم على أحد اللاعبين المتواجدين على
                                                الطاولة او البدلاء أو
                                                الحكم.</li>
                                            <li>رمي احد اللاعبين للورق أو أي شيء آخر خارج الميدان بطريقة غير مسؤولة و
                                                مقصودة.
                                            </li>
                                            <li>في حال مشاركة أي لاعب وهو يحمل كرت احمر يعتبر الفريق مهزوما بــــ 152 - 0 في
                                                تلك
                                                الصكة
                                            </li>
                                            <li>في حال تم توضيح اللعب بشكل خفي من اللاعب البديل خلال اللعب و استفاد فريقه
                                                مثل
                                                (تغيير ملامح
                                                الوجه و
                                                الابتسامة) يوقف الحكم او اللجنة اللعب و يسجلها قيد على نفس الفريق و يشهر
                                                بطاقة
                                                حمراء على اللاعب
                                                الذي قام
                                                بتوضيح
                                                اللعب و يحق للفريق الاخر المطالبة بكبوت.</li>
                                            <li>
                                                في حال تم توضيح العب بشكل علني من اللاعب البديل خلال اللعب مثل (تذكير خويه
                                                ينزل مشروعه او طلب
                                                من خويه يحل
                                                زات معين او ذكر نوع اللعب) يوقف الحكم او اللجنة اللعب و يسجلها قيد على نفس
                                                الفريق و يشهر بطاقة
                                                حمراء على
                                                اللاعب
                                                الذي قام بتوضيح اللعب و يحق للفريق الاخر المطالبة بكبوت.
                                            </li>
                                            <li>
                                                بعد انتهاء الجولة و قبل العد او بعد العد لا يحق للاعب البديل الكلام فيما يخص
                                                نشرة اللعب مثل
                                                <br>
                                                (تذكير فريقه بمشروعه او التعديل بالزيادة او النقصان على النشرة) و في حال تم
                                                ذلك
                                                بشكل خفي (حالة
                                                غش).
                                                <br>
                                                <span class="rounded definition">بعد العد</span> يتم حرمان فريقه من الزيادة
                                                التي
                                                ذكرها اللاعب ويتم إنذاره بكرت أحمر.
                                                <br>
                                                <span class="rounded definition">قبل العد</span> يتم تسجيلها لفريقه بدون
                                                مشاريع
                                                و بدون دبل ويتم إنذاره بكرت أحمر.
                                            </li>
                                            <li>
                                                حالات الغش سواء تم اكتشافها أثناء اجراء المباراة أو بعد المباراة (قبل انتهاء
                                                الدوري):
                                                <br>
                                                <span class="rounded definition">غش لاعب</span>
                                                يطرد اللاعب بكرت احمر، و يتم تشكيل لجنة مكونة من 3 أشخاص للنظر في العقوبة
                                                المناسبة (تبدأ
                                                العقوبات من إيقاف
                                                اللاعب مباراة كاملة حتى استبعاده من كافة بطولات البلوت).
                                                <br>
                                                <span class="rounded definition">غش فريق</span>
                                                يطرد الفريق بكرت احمر، و يتم تشكيل لجنة مكونة من 3 أشخاص للنظر في العقوبة
                                                المناسبة (تبدأ
                                                العقوبات من إستبعاد
                                                من البطولة حتى استبعاده من كافة بطولات البلوت) و تسجل جميع الجولات التي
                                                لعبها او
                                                سيلعبها مهزوما
                                                2-0 و كل صكة
                                                تسجل 152-0.

                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsWarning-headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsWarning-collapseFour">
                                        إجراءات الكرت الأحمر
                                        <Icon name="fluent-mdl2:decision-solid" size="25" class="mx-2 text-danger" />
                                    </button>
                                </h2>
                                <div id="panelsWarning-collapseFour" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <ol>
                                            <li>إذا تم طرد أحد اللاعبين من المباراة لا يمكنه المشاركة في نفس المباراة و يتم
                                                استبعاده صكة واحدة
                                                للمباراة
                                                القادمة.
                                            </li>
                                            <li>في حال حصول اللاعب على كرت احمر يتم ازالة جميع الكروت الصفراء السابقة على
                                                اللاعب.</li>
                                            <li>
                                                بعد اشهار كرت احمر بحق اي لاعب يجب مغادرة مكان إقامة المباراة مباشرة ولا يحق
                                                له
                                                التواجد خلال
                                                الصكة الأولى من
                                                المباراة القادمة.
                                            </li>
                                            <li>إذا لم يستخدم الفريق حقه بالرجوع للجنة خلال الصكة، و تم طرد لاعب من نفس
                                                الفريق
                                                يحق للفريق طلب
                                                قرار اللجنة
                                                للنظر
                                                في قرار الطرد.</li>
                                            <li>
                                                اجراءات بعد الطرد:
                                                <ul>

                                                    <li> الحالة الأولى:
                                                        <p>
                                                            طرد و لم يتم تغيير (يتم التغيير بشكل اجباري).
                                                        </p>
                                                    </li>
                                                    <li> الحالة الثانية:
                                                        <p>
                                                            طرد و تم التغيير (يضاف للفريق المنافس 152 لمجموع نشرته وتبقى
                                                            نشرة
                                                            الفريق المطرود و
                                                            تنتهي الصكة
                                                            ويتم
                                                            بدأ صكة
                                                            جديدة)
                                                        </p>
                                                    </li>
                                                    <li> الحالة الثالثة:
                                                        <p>
                                                            طرد و لا يوجد بديل (سواءً تغيب البديل أو تم طرده من الصكة
                                                            السابقة أو
                                                            المباراة
                                                            السابقة):
                                                        <ol>
                                                            <li>
                                                                في حال كانت الصكة الأولى: (يضاف للفريق المنافس 152 على مجموع
                                                                نشرته وتبقى نشرة
                                                                الفريق
                                                                المطرود
                                                                و
                                                                تنتهي
                                                                الصكة، و
                                                                يعتبر الفريق المنافس فائز بالصكة الثانية 152-0 و تنتهي
                                                                المباراة)
                                                            </li>
                                                            <li>
                                                                في حال كانت النتيجة 1-0 للفريق المنافس (يضاف للفريق المنافس
                                                                152
                                                                لمجموع نشرته
                                                                وتبقى نشرة
                                                                الفريق
                                                                المطرود و
                                                                تنتهي
                                                                الصكة الثانية)
                                                            </li>
                                                            <li>
                                                                في حال كانت 1-0 للفريق المطرود (يضاف للفريق المنافس 152 على
                                                                مجموع نشرته في الصكة
                                                                الثانية
                                                                وتبقى
                                                                نشرة
                                                                الفريق
                                                                المطرود و تنتهي الصكة، و يعتبر الفريق المنافس فائز بالصكة
                                                                الثالثة بـ 152-0 و
                                                                تنتهي المباراة)
                                                            </li>
                                                            <li>
                                                                في حال كانت النتيجة 1-1 (يضاف للفريق المنافس 152 على مجموع
                                                                نشرته
                                                                وتبقى نشرة
                                                                الفريق
                                                                المطرود و
                                                                تنتهي الصكة
                                                                الثالثة)
                                                            </li>
                                                        </ol>
                                                        </p>
                                                    </li>

                                                    <li> الحالة الرابعة: <p>
                                                            بدأت المباراة و لاعبين اثنين من نفس الفريق تم طردهم المباراة
                                                            السابقة
                                                            (يعتبر الفريق
                                                            المطرود
                                                            مهزوما
                                                            لصكة
                                                            الأولى
                                                            ب152 و
                                                            تكمل المباراة)

                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive">
                    <Icon name="ic:sharp-person" size="25" class="mx-2 head-icon" />
                    اللاعبين / انتقالات اللاعبين
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse ">
                <div class="accordion-body">
                    <ol>
                        <li>يجب على الفرق المشاركة تقديم كشوفات أسماء اللاعبين قبل انطلاق الدوري ب 15 يوم.</li>
                        <li>يجب اكتمال تسجيل الفريق ب3 لاعبين فقط.</li>
                        <li>يسمح للفريق المشاركة خلال المباراة بلاعبين اثنين كحد ادنى.</li>
                        <li> لا يسمح بإشراك لاعب لم يتم تسجيله في كشوفات الفريق.</li>
                        <li> للفريق المشارك إجراء تبديل واحد كل صكة (لا يتم احتساب اللاعبين الذين بدأوا بالصكة تغيير).
                        </li>
                        <li> يجب على الفريق ارتداء زي موحد وفي حال المخالفة يمنع الفريق من لعب المباراة ويعد منسحباً.
                        </li>
                        <li>يحق للبدلاء تشجيع فريقهم بعد انتهاء جولة اللعب بشرط عدم توضيح اللعب.</li>
                        <li>إنتقال اللاعبين:
                            <ol>
                                <li>لا يسمح بالتعاقد مع اللاعبين او انتقالهم قبل بدء الدوري ب 15 يوم.</li>
                                <li>يسمح بالتعاقد مع اللاعبين و المفاوضات بعد نهاية آخر مباراة من الدور الأول من الدوري
                                    ويستمر السماح
                                    لمدة 6 أيام
                                    خلال فترة التوقف قبل بداية الدور الثاني ب 24 ساعة.</li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven">
                    <Icon name="ic:baseline-control-point-duplicate" size="25" class="mx-2 head-icon" />
                    حساب النقاط و الأبناط و ترتيب الدوري
                </button>
            </h2>
            <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse ">
                <div class="accordion-body">
                    <ol>
                        <li> الفريق الفائز ب صكتين من أصل 3 صكات يحصل على 3 نقاط.</li>
                        <li>الفريق المهزوم لا يحصل على أي نقاط.</li>
                        <li>يتم احتساب جميع ابناط الصكات للفريق في حالة الفوز أو الخسارة و يتم قسمتها على عدد الصكات التي
                            لعبها وفاز او انهزم فيها ليتم إخراج متوسط ابناط الفريق.</li>
                        <li>في حال تعادل فريقين أو أكثر يتم ترتيب الدوري على حسب أكثر الفرق أبناط.</li>
                        <li>في حال تعادل النقاط و الأبناط يتم الرجوع للمواجهات المباشرة و احتساب أكثر الفرق فوز بالصكات.
                        </li>
                        <li>في حال تعادل النقاط و الابناط و المواجهات المباشرة يتم حسم الدوري للفريق الأقل أكك في كافة
                            الألعاب ماعدى الجولات التي يتم توريقها.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix">
                    <Icon name="ph:cursor-text" size="25" class="mx-2 head-icon" />
                    مصطلحات
                </button>
            </h2>
            <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse ">
                <div class="accordion-body">
                    <ol>
                        <li class="mt-2"> <span class=" rounded-3 px-1 text-light bg-warning me-2">
                                الغش
                            </span>
                            هي حالة غير قانونية لا تظهر للفريق الآخر و احيانا لا تظهر للحكم حيث يقوم اللاعب او الفريق
                            باستخدام إيماءات خفية غير مرئية تساعد الفريق على كسب النقاط.
                        </li>

                        <li class="mt-2"> <span class=" rounded-3 px-1 text-light bg-warning me-2">
                                بطولة الدوري
                            </span>
                            هي بطولة يلعب فيها الفرق بمباريات ذهاب وإياب بين كل الفرق (دورين: دور أول، دور ثاني) و يتم حسم
                            الدوري من خلال جمع اكثر عدد من النقاط.

                        </li>
                        <li class="mt-2"> <span class=" rounded-3 px-1 text-light bg-warning me-2">
                                دور
                            </span>
                            هي مجموعة مواجهات للفريق حيث يلعب الفريق مع كل الفرق مرة واحدة.
                        </li>
                        <li class="mt-2"> <span class=" rounded-3 px-1 text-light bg-warning me-2">
                                مباراة
                            </span>
                            هو تحدي يقوم بين فريقين و يكون التحدي من 3 صكات و الفريق الفائز بصكتين من أصل ثلاث
                            يصبح فائز بالمباراة. </li>
                        <li class="mt-2"> <span class=" rounded-3 px-1 text-light bg-warning me-2">
                                صكة
                            </span>
                            هي لعبة بالبلوت كاملة مكونة من جولات تنتهي بفوز أحد الفريقين عند حصوله على 152 بنط.
                        </li>
                        <li class="mt-2"> <span class=" rounded-3 px-1 text-light bg-warning me-2">
                                توضيح اللعب
                            </span>
                            هي شيء غير مقصود يتم من خلاله توضيح نوع أحد الكروت مع اللاعب مثل: التردد باللعب أو ضرب الطاولة
                            وقت التهريب. </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({ title: "قوانين دوري سام للبلوت" })
</script>


<style  scoped>
.card {
    width: 95%;
    margin: 0.5em auto;
}

ol li::marker {
    color: #1c9b59;
}

ol li {
    padding-bottom: 4px;
}

ol {
    padding: 0 1rem 0 0;
    margin-bottom: 0;
}

.accordion-body {
    padding: 1rem;
}

.sub-header {
    color: #1c9b59
}

.definition {
    background-color: darkgrey;
    padding: 0.1rem 0.5rem 0.1rem 0.5rem;
    color: #fff;
}

ul li {
    list-style-type: square;
    line-height: 200%;
    padding-bottom: 6px;

}

ul li::marker {
    color: #1c9b59;
}

.head-icon {
    color: #1c9b59;
}
</style>

