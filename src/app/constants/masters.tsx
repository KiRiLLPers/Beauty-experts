import photo1 from '../../../public/images/SectionMasters/irina.png'
import photo2 from '../../../public/images/SectionMasters/pershina.png'
import photo3 from '../../../public/images/SectionMasters/beiner.png'
import photo4 from '../../../public/images/SectionMasters/botchenko.png'
import photo5 from '../../../public/images/SectionMasters/hamaganova.png'
import photo6 from '../../../public/images/SectionMasters/kolesnikova.png'
import photo7 from '../../../public/images/SectionMasters/maslenkina.png'
import photo8 from '../../../public/images/SectionMasters/nesterova.png'
import photo9 from '../../../public/images/SectionMasters/osadchaia.png'
import photo10 from '../../../public/images/SectionMasters/paseka.png'
import photo11 from '../../../public/images/SectionMasters/uglova.png'
import photo12 from '../../../public/images/SectionMasters/yulia.png'
import photo13 from '../../../public/images/SectionMasters/zaharevich.png'
import photo14 from '../../../public/images/SectionMasters/zherebcova.png'
import photo15 from '../../../public/images/SectionMasters/zhorova.png'
import hairdresser from '../../../public/images/icons/hairdresser.svg'
import manicure from '../../../public/images/icons/manicure.svg'
import visagiste from '../../../public/images/icons/visagiste.svg'
import cosmetologist from '../../../public/images/icons/cosmetologist.svg'
import {Master} from "@/app/Types/Masters";


export const masters: Master[] = [
    {
        id: 1,
        name: 'Ирина Садовская',
        profile: 'владелица и топ-стилист',
        description: 'Мой стиль и подход к созданию образов, стрижек, причёсок и окрашиванию — это результат сочетания русской школы и обучения у европейских преподавателей. Это даёт мне большую свободу в творческом процессе. Я имею широкие знания в использовании различных техник и инструментов, что позволяет создавать неповторимые результаты и находить индивидуальный подход в работе с моими клиентами. Наставничество и опыт — залог роста всей команды.',
        experience: 'более 30 лет опыта',
        icon: hairdresser,
        photo: photo1
    },
    {
        id: 2,
        name: 'Юлия Чуркина ',
        profile: 'владелица и мастер подолог',
        description: 'Ведущий специалист студии по работе с проблемными ногами и руками. Работаю по технологиям ведущих школ, которые успешно применяю в работе и обучении наших мастеров. В моём арсенале не только большой опыт, но и ряд собственных методик.',
        experience: 'более 25 лет опыта',
        icon: manicure,
        photo: photo12
    },
    {
        id: 3,
        name: 'Дарья Ботченко',
        profile: 'визажист и топ-стилист',
        description: '',
        experience: 'x',
        icon: visagiste,
        photo: photo4
    },
    {
        id: 4,
        name: 'Татьяна Углова',
        profile: 'косметолог',
        description: '-',
        experience: 'более 30 лет опыта',
        icon: cosmetologist,
        photo: photo11,
    },
    {
        id: 5,
        name: 'Константин Захаревич',
        profile: 'топ-стилист',
        description: 'Если ты ищешь яркого и харизматичного стилиста с великолепным чувством юмора и большим опытом за плечами, то я — твоё идеальное решение! Мои клиенты всегда покидают салон с улыбкой на лице и прекрасными впечатлениями. Я специализируюсь на коротких стрижках и мастерски умею подобрать стиль, который подчеркнёт все твои достоинства.',
        experience: 'более 20 лет опыта',
        icon: hairdresser,
        photo: photo13
    },
    {
        id: 6,
        name: 'Вероника Першина',
        profile: 'стилист',
        description: 'На страже красивых и здоровых волос с 2019 года. Я владею множеством техник и стилей, включая классический AirTouch, балаяж, создание рельефных окрашиваний и создание красивых вкусных однотонных оттенков. Кроме того, я специализируюсь на создании чётких геометрических стрижек или объёмных и текстурных причёсок. Я помогу вам найти свой уникальный стиль и выбрать то, что отвечает потребностям вашей души.',
        experience: '5 лет опыта',
        icon: hairdresser,
        photo: photo2,
    },
    {
        id: 7,
        name: 'Татьяна Масленкина',
        profile: 'стилист',
        description: '-',
        experience: '16 лет опыта',
        icon: hairdresser,
        photo: photo7,
    },
    {
        id: 8,
        name: 'Ольга Бейнер',
        profile: 'эксперт по волосам',
        description: 'Парикмахер — настоящий художник! Моя работа приносит мне огромное удовлетворение, потому что она даёт возможность создавать новые образы и подчёркивать изящные черты лица. Получать благодарные эмоции от клиентов — это просто непередаваемое удовольствие! Я постоянно обучаюсь, чтобы быть в курсе последних тенденций и идти в ногу со временем.',
        experience: '16 лет опыта',
        icon: hairdresser,
        photo: photo3,
    },
    {
        id: 9,
        name: 'Юлия Хамаганова',
        profile: 'эксперт по волосам',
        description: 'Мои навыки владения французской техникой стрижек и сложными методами окрашивания волос позволяют мне создавать уникальные и выразительные образы. Я всегда следую последним трендам, чтобы мои укладки были стильными и современными. Каждому клиенту я уделяю особое внимание, нахожу индивидуальный подход и проявляю максимальную заботу волосам.',
        experience: '13 лет опыта',
        icon: hairdresser,
        photo: photo5,
    },
    {
        id: 10,
        name: 'София Осадчая',
        profile: 'визажист',
        description: '-',
        experience: '13 лет опыта',
        icon: visagiste,
        photo: photo9,
    },
    {
        id: 11,
        name: 'Даша Пасека',
        profile: 'мастер маникюра и педикюра',
        description: 'Я — мастер-универсал в работе с ногтями, и мои навыки охватывают широкий спектр услуг. В совершенстве владею современными техниками маникюра, покрытия и моделирования на верхних формах, что позволяет мне создавать красивые и прочные ногтевые пластины. Также я предлагаю полноценный уход за ногами, включая элементы подологии.',
        experience: '... лет опыта',
        icon: manicure,
        photo: photo10,
    },
    {
        id: 12,
        name: 'Тамара Нестерова',
        profile: 'мастер педикюра',
        description: 'Я — мастер гигиенического педикюра и восковой эпиляции с большим стажем работы. Мой приоритет — это обеспечить комфорт и безопасность каждого клиента. Я строго придерживаюсь всех гигиенических правил и использую только профессиональные материалы и инструменты. Качественное выполнение процедур в короткие сроки — это моя визитная карточка!',
        experience: 'более 30 лет опыта',
        icon: manicure,
        photo: photo8,
    },
    {
        id: 13,
        name: 'Елена Жорова ',
        profile: 'косметолог',
        description: 'Работаю косметологом эстетистом с 2004, 18 лет являюсь сертифицированным тренером в косметических компаниях. Ежемесячно провожу обучения для косметологов, массажистов: SPA программы, восстановление после родов, после похудения, антицеллюлитные обёртывания, мезотерапия по телу. Владею многими массажными техниками по лицу и телу и люблю в работе комплексный подход.',
        experience: '19 лет опыта',
        icon: cosmetologist,
        photo: photo15,
    },
    {
        id: 14,
        name: 'Юлия Жеребцова',
        profile: 'массажист',
        description: 'Я специализируюсь на медицинском массаже с 2003 года, а также я прошла множество обучений разным техникам массажа. Сейчас я сосредотачиваюсь на миофасциальном массаже, в сочетании с миопластикой, так как эти техники позволяют достичь хороших результатов уже после первых сеансов. Более того, они позволяют мне работать индивидуально с каждым клиентом, учитывая его состояние, а не использовать стандартные подходы.',
        experience: '20 лет опыта',
        icon: cosmetologist,
        photo: photo14,
    },
    {
        id: 15,
        name: 'Маргарита Колесникова',
        profile: '-',
        description: '-',
        experience: '... лет опыта',
        icon: cosmetologist,
        photo: photo6,
    },
]
