export const priceTable: Record<string, any> = {
    'cosmetology-massage': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "цена",
                    field: "price",
                },
            ],
        },
        data: [
            {
                service: "Массаж лица (1 час)",
                price: "3 000 — 3 500 р.",
            },
            {
                service: "Массаж тела (1 час)",
                price: "4 000 — 4 500 р.",
            },
            {
                service: "Солевое обертывание",
                price: "6 000 р.",
            },
            {
                service: "Водоросли (1,5 часа)",
                price: "8 000 р.",
            },
            {
                service: "Водоросли (2 часа)",
                price: "10 000 р.",
            },
            {
                service: "Чистка лица",
                price: "2 500 — 3 000 р.",
            },
            {
                service: "Пилинги",
                price: "1 500 — 6 000 р.",
            },
        ],
    },
    'hairdressing': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "топ-стилист",
                    field: "top",
                },
                {
                    title: "стилист",
                    field: "stylist",
                },
                {
                    title: "эксперт",
                    field: "expert",
                },
            ],
        },
        data: [
            {
                service: 'Стрижка женская',
                top: '6 000 — 8 000 р.',
                stylist: '4 000 р.',
                expert: '2 500 р.'
            },
            {
                service: 'Укладка',
                top: '2 500 — 3 000 р.',
                stylist: '2 000 р.',
                expert: '1 500 р.'
            },
            {
                service: 'Утюг, кудри',
                top: '3000 — 3 500 р.',
                stylist: '2 500 р.',
                expert: '2 000 р.'
            },
            {
                service: 'Прическа на длинные волосы',
                top: '4 500 р.',
                stylist: '3 000 р. - 3 500 р.',
                expert: ''
            },
            {
                service: 'Челка',
                top: '1 500 р.',
                stylist: '1 000 р.',
                expert: '800 р.'
            },
            {
                service: 'Шатуш/Айртач',
                top: '',
                stylist: '7 000 — 9 000 р.',
                expert: ''
            },
            {
                service: 'Химическая завивка',
                top: '',
                stylist: '10 000 р. - 15 000 р.',
                expert: ''
            },
            {
                service: 'Окраска кавер',
                top: '',
                stylist: '1 500 р.',
                expert: ''
            },
            {
                service: 'Стрижка детская',
                top: '2 500 р.',
                stylist: '1 500 р. - 2 000 р.',
                expert: '1 500 р.'
            },
            {
                service: 'Стрижка мужская',
                top: '3 500 р.',
                stylist: '2 000 р.',
                expert: '2 000 р.'
            },
            {
                service: 'Стрижка бороды',
                top: '',
                stylist: '600 р.',
                expert: ''
            },
            {
                service: 'ОКРАШИВАНИЕ',
                section: true,
            },
            {
                service: 'Короткое',
                top: '5 000 — 6 000 р.',
                stylist: '4 500 р.',
                expert: '4 000 р.'
            },
            {
                service: 'Среднее',
                top: '5 500 — 7 000 р.',
                stylist: '5 000 р.',
                expert: '4 500 р.'
            },
            {
                service: 'Длинное',
                top: '6 500 — 8 000 р.',
                stylist: '5 500 р.',
                expert: '5 000 р.'
            },
            {
                service: 'Сложное',
                top: '8 000 — 10 000 р.',
                stylist: '6 500 р.',
                expert: '5 500 р.'
            },
            {
                service: 'Мелирование ',
                section: true,
            },
            {
                service: 'Частичное',
                top: '4 500 — 6 000 р.',
                stylist: '4 000 р.',
                expert: '3 500 р.'
            },
            {
                service: 'Короткое',
                top: '5 500 — 6 000 р.',
                stylist: '4 500 р.',
                expert: '4 000 р.'
            },
            {
                service: 'Среднее',
                top: '6 000 — 7 000 р.',
                stylist: '5 500 р.',
                expert: '5 000 р.'
            },
            {
                service: 'Длинное',
                top: '7 000 — 8 000 р.',
                stylist: '6 000 р.',
                expert: '5 500 р.'
            },
        ]
    },
    'makeup': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "дарья ботченко",
                    field: "daria",
                },
                {
                    title: "софия осадчая",
                    field: "sofia",
                },
            ],
        },
        data: [
            {
                service: 'Макияж',
                daria: '8 000 — 10 000 р.',
                sofia: '4 500 — 6 000 р.'
            },
            {
                service: 'Образ',
                daria: '11 000 — 13 000 р.',
                sofia: ''
            },
            {
                service: 'Оформление бровей',
                daria: '',
                sofia: '1 000 — 2 000 р.'
            },
            {
                service: 'Урок для себя',
                daria: '18 000 - 20 000 р.',
                sofia: ''
            },
            {
                service: 'Обучение PROMAKEUP (повышение квалификации визажистов)',
                daria: '*  Цену уточняйте в салоне',
                sofia: ''
            },
        ]
    },
    'manicure': {
        metadata: {
            columns: [
                {
                    title: "услуга",
                    field: "service",
                },
                {
                    title: "цена",
                    field: "price",
                },
            ]
        },
        data: [
            {
                service: 'маникюр',
                section: true,
            },
            {
                service: 'Экспресс маникюр (подпиливание с покрытием)',
                price: '600 р.',
            },
            {
                service: 'Маникюр (европейский)',
                price: '1 500 — 1 700 р.',
            },
            {
                service: 'Покрытие (основа + лак закрепитель) / лечение',
                price: '300 — 500 р.',
            },
            {
                service: 'Покрытие гель-лаком',
                price: '1 000 р.',
            },
            {
                service: 'Покрытие гель-лаком с выравниваемой базой',
                price: '1 500 р.',
            },
            {
                service: 'Наращивание ногтей',
                price: '3 000 р.',
            },
            {
                service: 'Укрепление натуральных ногтей жестким гелем',
                price: '1 500 р.',
            },
            {
                service: 'Снятие гель-лака',
                price: '300 р.',
            },
            {
                service: 'Снятие лака',
                price: '50 р.',
            },
            {
                service: 'Массаж рук (15 мин.)',
                price: '300 р.',
            },
            // {
            //     service: 'Парафиновая ванночка',
            //     price: '200 р.',
            // },
            {
                service: 'Крем + парафин',
                price: '600 р.',
            },
            {
                service: 'SPA-уход',
                price: '600 р. - 1 000 р.',
            },
            {
                service: 'Покрытие гель-лаком “Французский маникюр',
                price: '1 500 р.',
            },
            {
                service: 'Стемпинг',
                price: 'от 50 р.',
            },
            {
                service: 'Градиент',
                price: '100 — 1 000 р.',
            },
            {
                service: 'Втирка пигментами',
                price: '100 — 500 р.',
            },
            {
                service: 'педикюр',
                section: true,
            },
            {
                service: 'Педикюр',
                price: '3 000 — 3 200 р.',
            },
            {
                service: 'Педикюр мужской',
                price: '3 000 р. - 3 200 р.',
            },
            {
                service: 'Обработка ногтей',
                price: '2 000 р.',
            },
            {
                service: 'Обработка ступней',
                price: '2 000 р.',
            },
            {
                service: 'Обработка одного вросшего ногтя',
                price: '250 р.',
            },
            {
                service: 'Массаж ног (15 мин.)',
                price: '300 р.',
            },
            {
                service: 'Массаж ног (30 мин.)',
                price: '600 р.',
            },
            {
                service: 'SPA-уход',
                price: '500 р.',
            },
            {
                service: 'B/s пластина',
                price: '1 500 р.',
            },
            {
                service: 'Титановая нить',
                price: '3 500 р.',
            },
            {
                service: 'Скоба Фреза',
                price: '3 500 р.',
            },
            {
                service: 'Протезирование одного ногтя',
                price: '200 — 500 р.',
            },
        ]
    }
};
