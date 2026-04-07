// [Source Date: 2026/04/07]

// --- 1. データ定義 ---
const data = {
    A: {
        name: "玲美",
        classes: [
            { day: 1, period: 1, subject: "中日翻訳演習1(基礎)", room: "2036", teacher: "大羽りん", desc: "中国語ネイティブの一年生を対象に翻訳の基礎を身に付け、簡単そうに見えて訳しにくい中国語や日本語を訳す練習をします。", grading: "課題提出： 30％、課題完成度：30％、最終課題の提出及び完成度40%5回以上欠席したものは評価の対象としない。", credits: 1 },
            { day: 1, period: 2, subject: "日本文化論(歴史)", room: "4007", teacher: "前田禎彦", desc: "国際日本学部歴史民俗学科のカリキュラムポリシーに従い、受講生が、1）原始・古代、2）中世、3）近世、4）近現代という日本史の時代区分にもとづき、各時代の政治・社会・文化の基本的な流れと特色を学び、日本史全体の通史的理解を深めることを目標としています。", grading: "各教員の担当授業で課されたコメントシートやテスト・レポートなどによる評価（各教員25％ずつ）を総合して最終評価を行います。", credits: 2 },
            { day: 1, period: 3, subject: "英語Ⅰ(Speaking)", room: "8016", teacher: "Moraresu Deru Kasuthiyo Karurosu", desc: "毎回異なるトピック・話題に関する語彙や表現を学び、会話を通してそれらの語彙や表現を「使う」ことに重点を置く。", grading: "第12回で実施する臨時試験（授業内試験）＝30%プレゼンテーション＝30%授業への参加態度 ＝40%", credits: 1 },
            { day: 2, period: 0, subject: "高級中国語演習Ⅰ(基礎)A", room: "20032", teacher: "郭夢", desc: "これまでに習得した中国語の基礎的な発音・文法事項を確認しながら、文法理解をさらに発展させ、実践的な中国語運用能力の向上を目指す。", grading: "課題の完成度・提出状況および授業態度（60％）、授業内試験（40％）によって総合的に評価する。※授業開始30分までに着席しない場合は遅刻とみなし、遅刻・早退3回を欠席1回として扱う。※欠席が3回を超えた場合は、成績評価の対象としない。", credits: 1 },
            { day: 2, period: 1, subject: "文学", room: "3008", teacher: "澤口哲弥", desc: "高等学校国語科の教科書に掲載される名作をクリティカル・リーディングによって再読し、テクストに内在する隠れた意味を多角的に捉える読みのリテラシーを身につけます。", grading: "毎回授業の最後に書く振り返りシート（60％）・受講生の皆さんが授業によって得た知見を、自分なりにどう整理し、考え、疑問を持ったかを確かめます。日常的な取り組みを評価するものです。期末レポート（40％）・学修の達成度を論述式の課題によって測ります。内容の理解、および実践の定着の程度を測るものです。", credits: 2 },
            { day: 2, period: 2, subject: "ジェンダー論", room: "4006", teacher: "野宮亜紀", desc: "ジェンダーとセクシュアリティをめぐる課題、平等への視座", grading: "成績の評価は以下の基準で行ないます。・予習課題（記述式）の点数（50％）・復習用のミニテスト（選択式）の点数（50％）授業を4回以上欠席する場合は、評価の対象外となり得ます（やむを得ない事情がある場合は、事前に相談してください）。出席回数を満たしている場合でも、予習課題やミニテストの成績（合計点）が大学の定める基準に満たない場合には不合格となります。また、予習課題やミニテストの提出回数が少ないと、1回ごとの点数が良くても、全講義回数を通じた成績が基準に満たなくなるケースがあるため、注意してください（平均点ではなく、合計点で評価を行うため）。", credits: 2 },
            { day: 2, period: 3, subject: "英語Ⅰ(Listening)", room: "8015", teacher: "羽成拓史", desc: "英語を理解する基礎的能力を向上させ、高度なレベルの英語コミュニケーション能力を獲得することを目標とします。", grading: "次のようなポイントを総合的に絶対評価し単位を認定します。・授業の準備および練習や活動への意欲的な参加・小テスト（授業内試験）、発表評価や実技テスト、前期試験の結果・その他、指定された課題やレポート等の提出", credits: 1 },
            { day: 3, period: 0, subject: "中国政治経済概説A", room: "6008", teacher: "早田寛", desc: "中国およびその周辺地域をとりまく政治について、歴史、制度の側面から考察することで、現代中国政治についての基礎知識を得るとともに、現代中国に対する複眼的な視座を獲得することを目標とする。", grading: "・定期試験（定期試験期間に対面で定期試験を実施）（70%）・毎授業後に提出するコメントペーパー（20%）・小レポート（10%）", credits: 2 },
            { day: 3, period: 1, subject: "体験型研修(自然の分野)", room: "8016", teacher: "中川理絵", desc: "化粧品の商品企画開発 〜実践から学ぶ化粧品業界〜", grading: "平常点50%（毎回の授業で行うワーク）、最終レポート・プレゼンテーション50%で評価します。出席状況は評価の対象としませんが、初回を除き4回以上欠席した者は評価の対象としません。遅刻2回で欠席1回のカウントとします。", credits: 2 },
            { day: 3, period: 2, subject: "中国歴史概説A", room: "3009", teacher: "孫安石", desc: "19世紀から現代中国までの歴史について習う。", grading: "授業内試験50％と毎回のコメントシート50％をもって評価する。欠席が4回以上の場合は、評価の対象としない。", credits: 2 },
            { day: 3, period: 3, subject: "FYS", room: "8018", teacher: "加藤宏紀", desc: "ファースト・イヤー・セミナー（First Year Seminar）の略で、新入生が大学での学修により早く適応できるようにサポートする。", grading: "成績評価は、課題、レポート、プレゼンテーション等の内容 70％、授業に参加する姿勢 30％を目安とする。", credits: 2 },
            { day: 4, period: 1, subject: "日中文章表現論ⅠA", room: "5006", teacher: "本田親史", desc: "主に日本語の基礎的な表現の中で間違いやすいトピックを選び、これに関する解説・講義を踏まえて、演習と各受講者による文章作成実践を行う。", grading: "平常点50％+学期末レポート50％。4回以上欠席した学生は評価の対象としない。また辞書を携行していない受講者は平常点を減点する場合もある。なお学生証の携行を忘れたとして平常点の修正を求める受講者が時々いるが、原則としてこれには応じない。", credits: 2 },
            { day: 4, period: 2, subject: "中国社会概説A", room: "6010", teacher: "本田親史", desc: "中国社会をめぐる歴史的な文脈ともつながりのあるトピックや映像を選び、これに関する分析・解釈を交えた講義を展開するとともに、適宜関連する映像作品も紹介していく。", grading: "平常点50％+授業内試験(学期末レポート)50％。平常点は毎回のリアクションペーパー提出などを基に算出する。なお四回以上欠席した学生は評価の対象としない。", credits: 2 },
            { day: 5, period: 0, subject: "物理学の展開", room: "時間外", teacher: "鵜木誠", desc: "物理学の代表的な法則を取り上げ、それらの法則の発見にまつわる経緯や、身近な現象において物理法則がどのような形で現れるかを解説する。", grading: "・成績評価は、平常点（50%）と期末レポート課題（50%）。・平常点は、毎回の授業動画の視聴状況及びレポート課題の評価である。・期末レポート課題は、授業期間の終盤に出題する。・定期試験は実施しない。また、評価方法については初回授業内でも説明するので必ず確認すること。", credits: 2 },
        ]
    },
    B: {
        name: "貫",
        classes: [
            { day: 0, period: 1, subject: "体験型研修", room: "20-110", teacher: "瀬川晶司", desc: "将棋のSA", grading: "単位進呈なし", credits: 0 },
            { day: 0, period: 2, subject: "特別演習Ⅰ", room: "20-309", teacher: "内田准教授", desc: "研究室の手伝い", grading: "特になし", credits: 0 },
            { day: 0, period: 3, subject: "卒業研究", room: "20-330", teacher: "内田准教授", desc: "卒業研究", grading: "特になし", credits: 2 },
            { day: 2, period: 2, subject: "卒業研究（自習）", room: "20-330", teacher: "内田准教授", desc: "卒業研究", grading: "特になし", credits: 0 },
            { day: 2, period: 3, subject: "卒業研究（自習）", room: "20-330", teacher: "内田准教授", desc: "卒業研究", grading: "特になし", credits: 0 },
            { day: 3, period: 2, subject: "コースワークⅦ", room: "20-330", teacher: "内田准教授", desc: "卒業研究の発表練習", grading: "特になし", credits: 1 },
            { day: 3, period: 3, subject: "卒業研究", room: "20-330", teacher: "内田准教授", desc: "卒業研究", grading: "特になし", credits: 2 },
        ]
    }
};

let currentUser = 'A';

function render() {
    const grid = document.getElementById('timetable-grid');
    const userTitle = document.getElementById('user-title');
    const switchBtn = document.getElementById('switch-btn');
    const totalCredits = document.getElementById('total-credits');
    
    grid.innerHTML = '';
    userTitle.innerText = `${data[currentUser].name}の時間割`;
    
    // 次に切り替わる相手の名前をボタンに表示
    const nextUser = (currentUser === 'A' ? 'B' : 'A');
    switchBtn.innerText = `${data[nextUser].name}に切替`;
    
    let creditsSum = 0;

    for (let p = 0; p < 4; p++) {
        for (let d = 0; d < 6; d++) {
            const classInfo = data[currentUser].classes.find(c => c.day === d && c.period === p);
            
            const cell = document.createElement('div');
            cell.className = `timetable-cell ${classInfo ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border border-dashed border-slate-200'}`;
            
            if (classInfo) {
                creditsSum += classInfo.credits;
                cell.innerHTML = `
                    <div class="subject-name text-ku-blue">${classInfo.subject}</div>
                    <div class="room-label">${classInfo.room}</div>
                `;
                cell.onclick = () => showModal(classInfo);
            }
            
            grid.appendChild(cell);
        }
    }
    totalCredits.innerText = creditsSum;
}

document.getElementById('switch-btn').onclick = () => {
    currentUser = (currentUser === 'A') ? 'B' : 'A';
    render();
};

function showModal(info) {
    document.getElementById('modal-subject').innerText = info.subject;
    document.getElementById('modal-teacher').innerText = info.teacher;
    document.getElementById('modal-desc').innerText = info.desc;
    document.getElementById('modal-grading').innerText = info.grading;
    document.getElementById('modal-credits').innerText = info.credits;
    document.getElementById('modal').classList.remove('hidden');
}

document.getElementById('close-modal').onclick = () => {
    document.getElementById('modal').classList.add('hidden');
};

render();