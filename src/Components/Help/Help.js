import React from 'react';
import styles from './Help.module.scss'

const Help = () => {
    return (
        <div>
        <div className={styles.container}>
        <h1>Tez-Tez Verilən Suallar və Cavabları</h1>
            <div>
            <div  className={styles.cart} >
                <h3 className={styles.question}>
                    1.Sizdən hissəli ödənişlə məhsul almaq mümkündür?
                </h3>
               
                <span>Bəli, siz məhsulları 24 ayadək hissəli ödəniş şərtlərilə əldə edə bilərsiniz. Əksər məhsullar 18 ayadək faizsiz hissəli ödəniş şərtlərilə, ilkin ödənişsiz, iş yerindən arayış tələb olunmadan təqdim olunur.</span>
            </div>

            <div  className={styles.cart} >
                <h3 className={styles.question} >2.Alınan malın ödənişi hansı valyuta ilə hesablanır?</h3>
                <span>NS'hopping mağazalarından istər nağd, istərsə də hissəli ödənişlə əldə olunan bütün məhsulların ödənişi yalnız Azərbaycan Respublikasının milli valyutası – Azərbaycan manatı (AZN) ilə hesablanır.</span>
            </div>

            <div  className={styles.cart} >
                <h3 className={styles.question}>3.Onlayn sifariş hansı şəhərlərdə keçərlidir?</h3>
                <span>Hazırda ölkədaxili istənilən ünvana (Naxçıvan MR istisna) çatdırılmamız var. Ətraflı məlumat almaq üçün *3333 qısa nömrəsinə zəng edə və ya 050 8819349 whatsapp nömrəmizə yaza bilərsiniz.</span>
            </div>


            <div  className={styles.cart} >
                <h3 className={styles.question}>4.Çatdırılma ödənişsiz həyata keçirilir?</h3>
                <span>Planlaşdırılmış çatdırılma:50 AZN-dək bir sifarişin məbləği – 3 AZN təşkil edir.
                  Sifarişin məbləği 50 AZN-dən yuxarı olduqda – çatdırılma xidməti pulsuzdur. 
                  Qeyd olunan rayonlar istisna olmaqla: Sabirabad, Saatlı, İmişli, Şamaxı, Qobustan, Hacıqabul, Şirvan. Bu rayonlara pulsuz çatdırılma yalnız Azərpoçt xidmətlərinin köməyi ilə həyata keçirilir.
                  Ekspress çatdırılma qiyməti – 19.99 AZN təşkil edir.
                  Ətraflı məlumat üçün “Ödəniş və Çatdırılma” bölməsində qeyd olunan ətraflı məlumatla tanış ola bilərsiniz.</span>
            </div>


            <div  className={styles.cart} >
                <h3 className={styles.question}>5.Məhsulu bəyənməsəm geri qaytara bilərəm?</h3>
                <span>NS'hopping  mağazalarından əldə etdiyiniz məhsulu alınma günü nəzərə alınmamaq şərti ilə, 14 təqvim günü ərzində dəyişdirə və ya qaytara bilərsiniz. Məhsul istifadə edilməyibsə, əmtəə görünüşü pozulmayıbsa, komplektasiyası tamdırsa və satış qəbzi mövcuddursa, geri qaytarılması mümkündür.</span>
            </div>

            </div>


        </div>
    </div>
    );
}

export default Help;
