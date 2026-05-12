// 药物数据库
export const medicineDB = {
  '阿奇霉素': {
    category: '消炎药',
    dosage: '成人：每日一次，每次500mg，疗程3天；儿童：10mg/kg，每日一次，疗程3天。口服时不受进食影响。',
    multiPurpose: false
  },
  '头孢': {
    category: '消炎药',
    dosage: '头孢类药物需遵医嘱使用，一般成人每日2-4次，每次250-500mg。具体请参照药品说明书。',
    multiPurpose: false,
    aliases: ['头孢氨苄', '头孢克洛', '头孢克肟', '头孢呋辛']
  },
  '阿莫西林': {
    category: '消炎药',
    dosage: '成人：每次500mg，每6-8小时一次；儿童：50-100mg/kg/日，分3-4次服用。',
    multiPurpose: false
  },
  '罗红霉素': {
    category: '消炎药',
    dosage: '成人：每次150mg，每日2次；儿童：按体重2.5-5mg/kg，每日2次。',
    multiPurpose: false
  },
  '左氧氟沙星': {
    category: '消炎药',
    dosage: '成人：每日1-2次，每次250-500mg。18岁以下儿童禁用。',
    multiPurpose: false
  },
  '甲硝唑': {
    category: '消炎药',
    dosage: '成人：每次250-500mg，每日3-4次。不同用途剂量不同，请遵医嘱。',
    multiPurpose: true,
    purposes: [
      { name: '妇科炎症', desc: '治疗厌氧菌感染、滴虫性阴道炎等' },
      { name: '口腔感染', desc: '治疗牙周炎、口腔溃疡等' },
      { name: '肠道感染', desc: '治疗阿米巴痢疾、贾第鞭毛虫等' }
    ]
  },
  '红霉素': {
    category: '消炎药',
    dosage: '成人：每次250-500mg，每日4次；儿童：30-50mg/kg/日，分4次服用。',
    multiPurpose: false
  },
  '氯雷他定': {
    category: '皮肤科用药',
    dosage: '成人及12岁以上儿童：每日一次，每次10mg（1片）；2-12岁儿童：体重>30kg每次10mg，体重≤30kg每次5mg。',
    multiPurpose: true,
    purposes: [
      { name: '过敏性鼻炎', desc: '缓解打喷嚏、流鼻涕、鼻痒、眼痒等症状' },
      { name: '皮肤瘙痒', desc: '治疗荨麻疹、湿疹、皮炎等过敏性皮肤病' }
    ]
  },
  '开瑞坦': {
    category: '皮肤科用药',
    dosage: '同氯雷他定：成人及12岁以上儿童每日一次，每次10mg。',
    multiPurpose: true,
    purposes: [
      { name: '过敏性鼻炎', desc: '缓解鼻塞、流涕、喷嚏等' },
      { name: '皮肤瘙痒', desc: '治疗荨麻疹、皮肤过敏' }
    ]
  },
  '扑尔敏': {
    category: '感冒药',
    dosage: '成人：每次4mg，每日3次；儿童：0.35mg/kg/日，分3-4次服用。易引起嗜睡，驾车前勿用。',
    multiPurpose: true,
    purposes: [
      { name: '感冒症状', desc: '缓解鼻塞、流涕、打喷嚏' },
      { name: '过敏反应', desc: '治疗过敏性皮炎、荨麻疹等' }
    ]
  },
  '对乙酰氨基酚': {
    category: '感冒药',
    dosage: '成人：每次500-1000mg，每日不超过4次；儿童：10-15mg/kg，每次间隔4-6小时。',
    multiPurpose: false,
    aliases: ['扑热息痛', '泰诺', '必理通']
  },
  '布洛芬': {
    category: '止痛药',
    dosage: '成人：每次200-400mg，每日3-4次，最大剂量1200mg/日；儿童：5-10mg/kg，每6-8小时一次。',
    multiPurpose: true,
    purposes: [
      { name: '退热止痛', desc: '缓解头痛、牙痛、肌肉酸痛等' },
      { name: '消炎', desc: '治疗关节炎、腱鞘炎等炎症性疾病' }
    ]
  },
  '芬必得': {
    category: '止痛药',
    dosage: '同布洛芬：成人每次200-400mg，每4-6小时一次，每日不超过1200mg。',
    multiPurpose: true,
    purposes: [
      { name: '头痛牙痛', desc: '缓解各种疼痛' },
      { name: '关节炎', desc: '抗炎镇痛' }
    ]
  },
  '阿司匹林': {
    category: '止痛药',
    dosage: '成人：解热镇痛每次300-600mg，每日3次；预防心脑血管病每日75-100mg。儿童禁用（除川崎病）。',
    multiPurpose: true,
    purposes: [
      { name: '解热镇痛', desc: '缓解发热、头痛、关节痛等' },
      { name: '抗血小板', desc: '预防心梗、脑梗等血栓性疾病' }
    ]
  },
  '蒙脱石散': {
    category: '消化药',
    dosage: '成人：每次1袋（3g），每日3次；儿童：1岁以下每日1袋，1-2岁每日1-2袋，2岁以上每日2-3袋。',
    multiPurpose: false
  },
  '吗丁啉': {
    category: '消化药',
    dosage: '成人：饭前15-30分钟服用，每次10mg，每日3次；儿童：0.3mg/kg，每日3次。',
    multiPurpose: false
  },
  '奥美拉唑': {
    category: '消化药',
    dosage: '成人：每次20mg，每日1-2次；胃溃疡疗程4-8周，十二指肠溃疡2-4周。',
    multiPurpose: false
  },
  '健胃消食片': {
    category: '消化药',
    dosage: '成人：每次3片，每日3次，饭后嚼服；儿童：酌减。',
    multiPurpose: false
  },
  '开塞露': {
    category: '消化药',
    dosage: '成人：每次1支（20ml），儿童：每次半支（10ml）。将药液挤入直肠，保留5-10分钟。',
    multiPurpose: false
  },
  '红霉素软膏': {
    category: '外用药',
    dosage: '外用：清洁患处后涂薄层，每日2-3次。',
    multiPurpose: true,
    purposes: [
      { name: '皮肤感染', desc: '治疗脓疱疮、小面积烧伤、溃疡面感染等' },
      { name: '眼部感染', desc: '治疗沙眼、结膜炎等眼部感染（请咨询医生）' }
    ]
  },
  '碘伏': {
    category: '外用药',
    dosage: '外用：清洁创面后，用棉签蘸取少量涂擦患处，每日1-2次。不可口服。',
    multiPurpose: false
  },
  '创可贴': {
    category: '外用药',
    dosage: '外用：清洁伤口后贴于患处，每24-48小时更换一次。',
    multiPurpose: false
  },
  '扶他林': {
    category: '外用药',
    dosage: '外用：根据疼痛面积大小取适量，轻轻揉搓使药膏吸收，每日3-4次。',
    multiPurpose: false
  },
  '维生素C': {
    category: '维生素/保健品',
    dosage: '成人：每日1-2片（100-200mg），饭后服用。感冒时可适当增加剂量。',
    multiPurpose: false
  },
  '维生素B族': {
    category: '维生素/保健品',
    dosage: '成人：每日1片，饭后服用。具体剂量请参照产品说明书。',
    multiPurpose: false
  },
  '钙片': {
    category: '维生素/保健品',
    dosage: '成人：每日1-2次，每次500-600mg，随餐服用。儿童、孕妇、老年人遵医嘱。',
    multiPurpose: false
  },
  '复合维生素': {
    category: '维生素/保健品',
    dosage: '成人：每日1片，饭后服用。不要超量服用。',
    multiPurpose: false
  },
  '达克宁': {
    category: '皮肤科用药',
    dosage: '外用：清洁干燥患处后，均匀涂抹薄层，每日2次，疗程2-4周。',
    multiPurpose: false
  },
  '999皮炎平': {
    category: '皮肤科用药',
    dosage: '外用：取适量涂于患处，每日2-3次。不宜大面积、长期使用。',
    multiPurpose: false
  },
  '阿苯达唑': {
    category: '驱虫药物',
    dosage: '驱虫：成人及2岁以上儿童每次400mg，顿服；2岁以下禁用。',
    multiPurpose: false,
    aliases: ['肠虫清']
  },
  '氨茶碱': {
    category: '心血管药',
    dosage: '成人：每次100-200mg，每日3次；儿童：每次3-5mg/kg，每日3次。',
    multiPurpose: true,
    purposes: [
      { name: '哮喘', desc: '舒张支气管，缓解喘息' },
      { name: '心衰', desc: '增强心肌收缩力，利尿' }
    ]
  },
  '硝酸甘油': {
    category: '心血管药',
    dosage: '心绞痛发作时舌下含服1片（0.5mg），5分钟后可重复，最多3片。坐着或躺着服用。',
    multiPurpose: false
  },
  '硝苯地平': {
    category: '心血管药',
    dosage: '成人：起始每次5-10mg，每日3次；维持量每次10-20mg。控释片每日1次。',
    multiPurpose: true,
    purposes: [
      { name: '高血压', desc: '降血压' },
      { name: '心绞痛', desc: '预防和治疗心绞痛' }
    ]
  },
  '藿香正气水': {
    category: '感冒药',
    dosage: '成人：每次5-10ml，每日2次，用温水冲服。儿童酌减。',
    multiPurpose: false
  },
  '板蓝根': {
    category: '感冒药',
    dosage: '成人：每次1-2袋，每日2-3次；儿童酌减。',
    multiPurpose: false
  },
  '京都念慈菴': {
    category: '感冒药',
    dosage: '成人：每日3次，每次1汤匙（约15ml）；儿童减半。',
    multiPurpose: false
  },
  '西瓜霜': {
    category: '外用药',
    dosage: '外用：喷/敷于口腔、咽喉患处，每日数次。',
    multiPurpose: false
  },
  '美林': {
    category: '儿童用药',
    dosage: '儿童退热：6个月-12岁按体重5-10mg/kg，每6-8小时一次，每日不超过4次。使用前摇匀。',
    multiPurpose: true,
    purposes: [
      { name: '退热', desc: '用于儿童发烧，退热效果显著' },
      { name: '止痛', desc: '缓解儿童牙痛、头痛、肌肉痛等' }
    ]
  },
  '泰诺林': {
    category: '儿童用药',
    dosage: '儿童退热：每次10-15mg/kg，每4-6小时一次，每日不超过4次。',
    multiPurpose: false
  },
  '布洛芬混悬液': {
    category: '儿童用药',
    dosage: '儿童退热止痛：每次5-10mg/kg，每6-8小时一次。使用前请摇匀。',
    multiPurpose: false
  },
  '对乙酰氨基酚滴剂': {
    category: '儿童用药',
    dosage: '儿童退热：按体重计算，0.5-1ml/kg，每4-6小时一次。使用前请摇匀。',
    multiPurpose: false
  },
  '妈咪爱': {
    category: '儿童用药',
    dosage: '儿童肠道调节：2岁以下每次1袋，每日1-2次；2岁以上每次1-2袋，每日1-2次。用温水冲服。',
    multiPurpose: false,
    aliases: ['枯草杆菌二联活菌颗粒']
  },
  '小儿止咳糖浆': {
    category: '儿童用药',
    dosage: '儿童咳嗽：2-5岁每次5ml，5岁以上每次5-10ml，每日3-4次。',
    multiPurpose: false
  },
  '儿童清肺口服液': {
    category: '儿童用药',
    dosage: '儿童咳嗽痰多：每次1支，每日2-3次。',
    multiPurpose: false
  },
  '二甲双胍': {
    category: '糖尿病用药',
    dosage: '2型糖尿病：起始每次500mg，每日2次；维持量每次500-1000mg，每日2次。餐中或餐后服用。',
    multiPurpose: false
  },
  '格华止': {
    category: '糖尿病用药',
    dosage: '同二甲双胍：起始每次500mg，每日2次，逐渐调整剂量。',
    multiPurpose: false
  },
  '阿卡波糖': {
    category: '糖尿病用药',
    dosage: '2型糖尿病：起始每次50mg，每日3次；可增至每次100mg，每日3次。随第一口饭嚼服。',
    multiPurpose: false,
    aliases: ['拜唐苹']
  },
  '拜唐苹': {
    category: '糖尿病用药',
    dosage: '同阿卡波糖：起始每次50mg，每日3次，随餐服用。',
    multiPurpose: false
  },
  '格列齐特': {
    category: '糖尿病用药',
    dosage: '2型糖尿病：每次80mg，每日1-2次，早餐时服用。根据血糖调整剂量。',
    multiPurpose: false,
    aliases: ['达美康']
  },
  '达美康': {
    category: '糖尿病用药',
    dosage: '同格列齐特：起始每次40-80mg，每日1-2次。',
    multiPurpose: false
  },
  '瑞格列奈': {
    category: '糖尿病用药',
    dosage: '2型糖尿病：起始每次0.5-1mg，每日3次，餐前15分钟内服用。',
    multiPurpose: false,
    aliases: ['诺和龙']
  },
  '诺和龙': {
    category: '糖尿病用药',
    dosage: '同瑞格列奈：起始每次0.5mg，每日3次，餐前服用。',
    multiPurpose: false
  },
  '胰岛素': {
    category: '糖尿病用药',
    dosage: '胰岛素注射：剂量因人而异，需遵医嘱。冷藏保存（2-8°C），开封后室温保存不超过28天。',
    multiPurpose: false
  },
  '西格列汀': {
    category: '糖尿病用药',
    dosage: '2型糖尿病：每次100mg，每日1次，可与食物同服或分开服用。',
    multiPurpose: false,
    aliases: ['捷诺维']
  }
};

export class App {
  constructor() {
    this.medicines = [];
    this.currentCategory = '全部';
    this.selectedPurpose = null;
    this.customMedicineDB = {};
    this.currentUnknownMedicine = null;
    this.selectedImageFile = null;
  }

  init() {
    this.loadMedicines();
    this.loadCustomMedicineDB();
    this.renderApp();
    this.setupEventListeners();
    this.setDefaultExpiryDate();
    this.updateReminderCount();
    this.updateSuggestions();
  }

  loadMedicines() {
    const stored = localStorage.getItem('familyMedicines');
    this.medicines = stored ? JSON.parse(stored) : [];
  }

  loadCustomMedicineDB() {
    const stored = localStorage.getItem('customMedicineDB');
    this.customMedicineDB = stored ? JSON.parse(stored) : {};
  }

  saveCustomMedicineDB() {
    localStorage.setItem('customMedicineDB', JSON.stringify(this.customMedicineDB));
    this.updateSuggestions();
  }

  saveMedicines() {
    localStorage.setItem('familyMedicines', JSON.stringify(this.medicines));
  }

  setDefaultExpiryDate() {
    const twoYearsLater = new Date();
    twoYearsLater.setFullYear(twoYearsLater.getFullYear() + 2);
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
      expiryInput.value = twoYearsLater.toISOString().split('T')[0];
    }
  }

  renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = this.getAppHTML();
  }

  getAppHTML() {
    return `
      <header class="header">
        <div class="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
            <path d="m18 15-2-2"/><path d="m15 18-2-2"/>
          </svg>
          <h1>家庭药品管理系统</h1>
        </div>
        <div class="header-actions">
          <button class="reminder-btn camera-btn" onclick="app.openCameraModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <span>拍照识别</span>
          </button>
          <button class="reminder-btn" onclick="app.openReminderModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span>到期提醒</span>
            <span class="reminder-badge" id="reminderCount">0</span>
          </button>
        </div>
      </header>

      <main class="container">
        <section class="alerts-section" id="alertsSection"></section>

        <section class="add-form-card">
          <h2 class="form-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            添加新药物
          </h2>
          <form class="form-grid" id="medicineForm">
            <div class="form-group">
              <label for="medicineName">药物名称 *</label>
              <input type="text" id="medicineName" placeholder="输入药物名称" required list="medicineSuggestions">
              <datalist id="medicineSuggestions"></datalist>
            </div>
            <div class="category-hint" id="categoryHint" style="display: none;">
              <span class="hint-icon">🔍</span>
              <span class="hint-text">系统识别：<strong id="detectedCategory"></strong></span>
            </div>
            <div class="unknown-warning" id="unknownWarning" style="display: none;">
              <span class="warning-icon">⚠️</span>
              <span class="warning-text">该药物不在数据库中，请选择分类</span>
            </div>
            <div class="form-group">
              <label for="category">药物分类 <span id="categoryRequired" style="color: red; display: none;">*</span></label>
              <select id="category">
                <option value="">-- 选择分类 --</option>
                <option value="消炎药">消炎药</option>
                <option value="感冒药">感冒药</option>
                <option value="止痛药">止痛药</option>
                <option value="消化药">消化药</option>
                <option value="外用药">外用药</option>
                <option value="维生素/保健品">维生素/保健品</option>
                <option value="皮肤科用药">皮肤科用药</option>
                <option value="心血管药">心血管药</option>
                <option value="儿童用药">儿童用药</option>
                <option value="糖尿病用药">糖尿病用药</option>
                <option value="驱虫药物">驱虫药物</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div class="form-group" id="purposeGroup" style="display: none;">
              <label>选择该药物的主要用途 *</label>
              <div class="purpose-options" id="purposeOptions"></div>
            </div>
            <div class="form-group">
              <label for="dosage">服用剂量说明</label>
              <textarea id="dosage" placeholder="如：成人每日2次，每次1粒"></textarea>
            </div>
            <div class="form-group">
              <label for="expiryDate">到期日期 *</label>
              <input type="date" id="expiryDate" required>
            </div>
            <div class="form-group">
              <label for="quantity">数量</label>
              <input type="text" id="quantity" placeholder="如：2盒、10片">
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" onclick="app.resetForm()">重置</button>
              <button type="submit" class="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                  <polyline points="17 21 17 13 7 13 7 21"/>
                  <polyline points="7 3 7 8 15 8"/>
                </svg>
                保存药物
              </button>
            </div>
          </form>
          <div class="dosage-info" id="autoDosageInfo" style="display: none;">
            <h4>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
              自动生成的剂量说明
            </h4>
            <p id="autoDosageText"></p>
          </div>
        </section>

        <section class="category-section">
          <div class="search-bar">
            <input type="text" id="searchInput" placeholder="搜索药物名称...">
          </div>
          <div class="category-tabs" id="categoryTabs"></div>
          <div class="medicine-grid" id="medicineGrid"></div>
        </section>
      </main>

      <div class="modal-overlay" id="editModal">
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">编辑药物</h3>
            <button class="modal-close" onclick="app.closeEditModal()">&times;</button>
          </div>
          <form class="form-grid" id="editForm">
            <input type="hidden" id="editId">
            <div class="form-group">
              <label for="editName">药物名称 *</label>
              <input type="text" id="editName" required>
            </div>
            <div class="form-group">
              <label for="editCategory">药物分类</label>
              <select id="editCategory">
                <option value="消炎药">消炎药</option>
                <option value="感冒药">感冒药</option>
                <option value="止痛药">止痛药</option>
                <option value="消化药">消化药</option>
                <option value="外用药">外用药</option>
                <option value="维生素/保健品">维生素/保健品</option>
                <option value="皮肤科用药">皮肤科用药</option>
                <option value="心血管药">心血管药</option>
                <option value="儿童用药">儿童用药</option>
                <option value="糖尿病用药">糖尿病用药</option>
                <option value="驱虫药物">驱虫药物</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <div class="form-group">
              <label for="editPurpose">用途</label>
              <input type="text" id="editPurpose">
            </div>
            <div class="form-group">
              <label for="editDosage">服用剂量说明</label>
              <textarea id="editDosage"></textarea>
            </div>
            <div class="form-group">
              <label for="editExpiry">到期日期 *</label>
              <input type="date" id="editExpiry" required>
            </div>
            <div class="form-group">
              <label for="editQuantity">数量</label>
              <input type="text" id="editQuantity" placeholder="如：2盒">
            </div>
            <div class="form-actions">
              <button type="button" class="btn btn-secondary" onclick="app.closeEditModal()">取消</button>
              <button type="submit" class="btn btn-primary">保存修改</button>
            </div>
          </form>
        </div>
      </div>

      <div class="modal-overlay" id="reminderModal">
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">到期提醒</h3>
            <button class="modal-close" onclick="app.closeReminderModal()">&times;</button>
          </div>
          <div class="reminder-list" id="reminderList"></div>
        </div>
      </div>

      <div class="modal-overlay" id="cameraModal">
        <div class="modal camera-modal">
          <div class="modal-header">
            <h3 class="modal-title">拍照识别药单</h3>
            <button class="modal-close" onclick="app.closeCameraModal()">&times;</button>
          </div>
          <div class="camera-content">
            <div class="upload-area" id="uploadArea">
              <div class="upload-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <p class="upload-text">点击拍照或选择图片</p>
              <p class="upload-hint">支持 JPG、PNG 格式</p>
              <input type="file" id="imageInput" accept="image/*" capture="environment" style="display: none;">
              <button class="btn btn-primary" onclick="document.getElementById('imageInput').click()">选择图片</button>
            </div>
            <div class="preview-area" id="previewArea" style="display: none;">
              <img id="previewImage" alt="预览图片">
              <div class="preview-actions">
                <button class="btn btn-secondary" onclick="app.resetCamera()">重新选择</button>
                <button class="btn btn-primary" onclick="app.recognizeImage()">开始识别</button>
              </div>
            </div>
            <div class="loading-area" id="loadingArea" style="display: none;">
              <div class="loading-spinner"></div>
              <p class="loading-text">正在识别药单中的药物...</p>
              <p class="loading-hint">请稍候</p>
            </div>
            <div class="result-area" id="resultArea" style="display: none;">
              <h4 class="result-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                识别结果
              </h4>
              <div id="matchResult"></div>
              <div class="result-actions">
                <button class="btn btn-secondary" onclick="app.resetCamera()">继续识别</button>
                <button class="btn btn-primary" onclick="app.closeCameraModal()">完成</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="toast" id="toast"></div>
    `;
  }

  setupEventListeners() {
    document.getElementById('medicineForm').addEventListener('submit', (e) => this.handleAddMedicine(e));
    document.getElementById('medicineName').addEventListener('input', (e) => this.handleMedicineNameInput(e));
    document.getElementById('searchInput').addEventListener('input', () => this.handleSearch());
    document.getElementById('editForm').addEventListener('submit', (e) => this.handleEditMedicine(e));
    
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.action-btn');
      if (!btn) return;
      const action = btn.dataset.action;
      const id = btn.dataset.id;
      if (action === 'edit') this.openEditModal(id);
      else if (action === 'delete') this.deleteMedicine(id);
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    });

    const imageInput = document.getElementById('imageInput');
    if (imageInput) imageInput.addEventListener('change', (e) => this.handleImageSelect(e));

    this.renderCategoryTabs();
    this.renderMedicines();
    this.renderAlerts();
  }

  handleMedicineNameInput(e) {
    const name = e.target.value.trim();
    const categorySelect = document.getElementById('category');
    const autoDosageInfo = document.getElementById('autoDosageInfo');
    const purposeGroup = document.getElementById('purposeGroup');
    const purposeOptions = document.getElementById('purposeOptions');
    const categoryHint = document.getElementById('categoryHint');
    const unknownWarning = document.getElementById('unknownWarning');
    const categoryRequired = document.getElementById('categoryRequired');

    const matched = this.findMedicine(name);

    if (matched) {
      this.currentUnknownMedicine = null;
      unknownWarning.style.display = 'none';
      categoryRequired.style.display = 'none';
      categorySelect.value = matched.category;
      categoryHint.style.display = 'flex';
      document.getElementById('detectedCategory').textContent = matched.category;
      autoDosageInfo.style.display = 'block';
      document.getElementById('autoDosageText').textContent = matched.dosage;

      if (matched.multiPurpose && matched.purposes) {
        purposeGroup.style.display = 'block';
        purposeOptions.innerHTML = matched.purposes.map((p, i) => `
          <div class="purpose-option">
            <input type="radio" name="purpose" id="purpose${i}" value="${p.name}" onchange="app.selectPurpose('${p.name}')">
            <label for="purpose${i}"><div class="purpose-name">${p.name}</div><div class="purpose-desc">${p.desc}</div></label>
          </div>
        `).join('');
      } else {
        purposeGroup.style.display = 'none';
        this.selectedPurpose = null;
      }
    } else if (name.length >= 2) {
      this.currentUnknownMedicine = name;
      categoryHint.style.display = 'none';
      autoDosageInfo.style.display = 'none';
      purposeGroup.style.display = 'none';
      this.selectedPurpose = null;
      unknownWarning.style.display = 'flex';
      categoryRequired.style.display = 'inline';
      categorySelect.value = '';
    } else {
      this.currentUnknownMedicine = null;
      categoryHint.style.display = 'none';
      unknownWarning.style.display = 'none';
      categoryRequired.style.display = 'none';
      autoDosageInfo.style.display = 'none';
      purposeGroup.style.display = 'none';
      this.selectedPurpose = null;
    }
  }

  findMedicine(name) {
    const lowerName = name.toLowerCase();
    for (const [medName, data] of Object.entries(medicineDB)) {
      if (medName.toLowerCase().includes(lowerName) || lowerName.includes(medName.toLowerCase())) return { name: medName, ...data };
      if (data.aliases) {
        for (const alias of data.aliases) {
          if (alias.toLowerCase().includes(lowerName) || lowerName.includes(alias.toLowerCase())) return { name: medName, ...data };
        }
      }
    }
    for (const [medName, data] of Object.entries(this.customMedicineDB)) {
      if (medName.toLowerCase().includes(lowerName) || lowerName.includes(medName.toLowerCase())) return { name: medName, ...data, fromCustom: true };
    }
    return null;
  }

  selectPurpose(purpose) { this.selectedPurpose = purpose; }

  updateSuggestions() {
    const datalist = document.getElementById('medicineSuggestions');
    if (!datalist) return;
    const allMedicines = { ...medicineDB, ...this.customMedicineDB };
    const suggestions = Object.keys(allMedicines).map(name => {
      const med = allMedicines[name];
      const aliasText = med.aliases ? ` (${med.aliases.join(', ')})` : '';
      return `${name}${aliasText}`;
    });
    datalist.innerHTML = suggestions.map(s => `<option value="${s}">`).join('');
  }

  handleAddMedicine(e) {
    e.preventDefault();
    const name = document.getElementById('medicineName').value.trim();
    if (!name) { this.showToast('请输入药物名称', 'error'); return; }

    const matched = this.findMedicine(name);
    let category = document.getElementById('category').value;
    let purpose = this.selectedPurpose || (matched && !matched.multiPurpose ? matched.name : '');

    const isNewMedicine = !matched && !this.customMedicineDB[name];
    if (isNewMedicine) {
      if (!category) { this.showToast('请选择该药物的分类', 'error'); return; }
      this.customMedicineDB[name] = { category: category, dosage: document.getElementById('dosage').value.trim() || '请遵医嘱服用', multiPurpose: false };
      this.saveCustomMedicineDB();
      this.showToast(`新药物"${name}"已学习！`, 'success');
    } else if (!category && matched) category = matched.category;

    const medicine = {
      id: Date.now().toString(), name: name, category: category || '其他', purpose: purpose,
      dosage: document.getElementById('dosage').value.trim() || (matched ? matched.dosage : ''),
      expiryDate: document.getElementById('expiryDate').value,
      quantity: document.getElementById('quantity').value.trim(),
      addedDate: new Date().toISOString()
    };

    this.medicines.push(medicine);
    this.saveMedicines();
    this.renderMedicines();
    this.renderCategoryTabs();
    this.renderAlerts();
    this.updateReminderCount();
    this.resetForm();
    if (!isNewMedicine) this.showToast('药物添加成功！', 'success');
  }

  resetForm() {
    document.getElementById('medicineForm').reset();
    document.getElementById('autoDosageInfo').style.display = 'none';
    document.getElementById('purposeGroup').style.display = 'none';
    document.getElementById('categoryHint').style.display = 'none';
    document.getElementById('unknownWarning').style.display = 'none';
    document.getElementById('categoryRequired').style.display = 'none';
    this.selectedPurpose = null;
    this.currentUnknownMedicine = null;
    this.setDefaultExpiryDate();
  }

  renderCategoryTabs() {
    const categories = ['全部', '消炎药', '感冒药', '止痛药', '消化药', '外用药', '维生素/保健品', '皮肤科用药', '心血管药', '儿童用药', '糖尿病用药', '驱虫药物', '其他'];
    const tabsHtml = categories.map(cat => {
      const count = cat === '全部' ? this.medicines.length : this.medicines.filter(m => m.category === cat).length;
      return `<button class="tab ${cat === this.currentCategory ? 'active' : ''}" onclick="app.switchCategory('${cat}')">${cat} <span class="count">${count}</span></button>`;
    }).join('');
    document.getElementById('categoryTabs').innerHTML = tabsHtml;
  }

  switchCategory(category) { this.currentCategory = category; this.renderCategoryTabs(); this.renderMedicines(); }

  renderMedicines() {
    const grid = document.getElementById('medicineGrid');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filtered = this.medicines;
    if (this.currentCategory !== '全部') filtered = filtered.filter(m => m.category === this.currentCategory);
    if (searchTerm) filtered = filtered.filter(m => m.name.toLowerCase().includes(searchTerm) || (m.purpose && m.purpose.toLowerCase().includes(searchTerm)));

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg><p>${searchTerm ? '未找到匹配的药物' : '该分类暂无药物'}</p></div>`;
      return;
    }

    grid.innerHTML = filtered.map(med => {
      const expiryStatus = this.getExpiryStatus(med.expiryDate);
      let cardClass = 'medicine-card';
      if (expiryStatus === 'expired') cardClass += ' expired';
      else if (expiryStatus === 'expiring') cardClass += ' expiring';
      return `<div class="${cardClass}"><div class="medicine-header"><span class="medicine-name">${med.name}</span><span class="medicine-category">${med.category}</span></div>${med.purpose ? `<div class="medicine-purpose"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>${med.purpose}</div>` : ''}${med.dosage ? `<div class="medicine-dosage">${med.dosage}</div>` : ''}<div class="medicine-footer"><span class="medicine-expiry ${expiryStatus}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${this.formatExpiry(med.expiryDate)}</span><div class="medicine-actions"><button class="action-btn edit" data-action="edit" data-id="${med.id}">编辑</button><button class="action-btn delete" data-action="delete" data-id="${med.id}">删除</button></div></div></div>`;
    }).join('');
  }

  handleSearch() { this.renderMedicines(); }

  getExpiryStatus(dateStr) {
    const diffDays = Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'expired';
    if (diffDays <= 7) return 'expiring';
    return 'safe';
  }

  formatExpiry(dateStr) {
    const diffDays = Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return `已过期 ${Math.abs(diffDays)} 天`;
    if (diffDays === 0) return '今天到期';
    if (diffDays <= 7) return `还有 ${diffDays} 天到期`;
    return new Date(dateStr).toLocaleDateString('zh-CN');
  }

  renderAlerts() {
    const section = document.getElementById('alertsSection');
    const expired = this.medicines.filter(m => this.getExpiryStatus(m.expiryDate) === 'expired');
    const expiring = this.medicines.filter(m => this.getExpiryStatus(m.expiryDate) === 'expiring');
    let html = '';
    if (expired.length > 0) html += `<div class="alert-banner alert-expired"><span class="alert-icon">🚫</span><div class="alert-content"><h4>有 ${expired.length} 种药物已过期</h4><p>${expired.map(m => m.name).join('、')}</p></div></div>`;
    if (expiring.length > 0) html += `<div class="alert-banner alert-expiring"><span class="alert-icon">⚠️</span><div class="alert-content"><h4>有 ${expiring.length} 种药物即将到期</h4><p>${expiring.map(m => m.name).join('、')}</p></div></div>`;
    if (expired.length === 0 && expiring.length === 0) html = `<div class="no-alerts"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>所有药物状态正常</div>`;
    section.innerHTML = html;
  }

  updateReminderCount() {
    const count = this.medicines.filter(m => this.getExpiryStatus(m.expiryDate) === 'expired' || this.getExpiryStatus(m.expiryDate) === 'expiring').length;
    const badge = document.getElementById('reminderCount');
    if (badge) badge.textContent = count;
  }

  openEditModal(id) {
    const medicine = this.medicines.find(m => m.id === id);
    if (!medicine) return;
    document.getElementById('editId').value = medicine.id;
    document.getElementById('editName').value = medicine.name;
    document.getElementById('editCategory').value = medicine.category;
    document.getElementById('editPurpose').value = medicine.purpose || '';
    document.getElementById('editDosage').value = medicine.dosage || '';
    document.getElementById('editExpiry').value = medicine.expiryDate;
    document.getElementById('editQuantity').value = medicine.quantity || '';
    document.getElementById('editModal').classList.add('active');
  }

  closeEditModal() { document.getElementById('editModal').classList.remove('active'); }

  handleEditMedicine(e) {
    e.preventDefault();
    const id = document.getElementById('editId').value;
    const index = this.medicines.findIndex(m => m.id === id);
    if (index !== -1) {
      this.medicines[index] = { ...this.medicines[index], name: document.getElementById('editName').value.trim(), category: document.getElementById('editCategory').value, purpose: document.getElementById('editPurpose').value.trim(), dosage: document.getElementById('editDosage').value.trim(), expiryDate: document.getElementById('editExpiry').value, quantity: document.getElementById('editQuantity').value.trim() };
      this.saveMedicines();
      this.renderMedicines();
      this.renderCategoryTabs();
      this.renderAlerts();
      this.updateReminderCount();
      this.closeEditModal();
      this.showToast('药物信息已更新', 'success');
    }
  }

  deleteMedicine(id) {
    if (confirm('确定要删除这个药物吗？')) {
      this.medicines = this.medicines.filter(m => m.id !== id);
      this.saveMedicines();
      this.renderMedicines();
      this.renderCategoryTabs();
      this.renderAlerts();
      this.updateReminderCount();
      this.showToast('药物已删除', 'success');
    }
  }

  openReminderModal() {
    const reminderList = document.getElementById('reminderList');
    const expired = this.medicines.filter(m => this.getExpiryStatus(m.expiryDate) === 'expired');
    const expiring = this.medicines.filter(m => this.getExpiryStatus(m.expiryDate) === 'expiring');
    let html = '';
    if (expired.length === 0 && expiring.length === 0) html = `<div class="no-alerts"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>太棒了！所有药物都在有效期内</div>`;
    else {
      if (expired.length > 0) {
        html += `<h4 style="margin-bottom: 1rem; color: var(--danger);">已过期（${expired.length}）</h4>`;
        expired.forEach(m => { html += `<div class="reminder-item expired"><span class="icon">🚫</span><div class="info"><h4>${m.name}</h4><p>过期 ${Math.abs(Math.ceil((new Date(m.expiryDate) - new Date()) / (1000 * 60 * 60 * 24)))} 天</p></div></div>`; });
      }
      if (expiring.length > 0) {
        html += `<h4 style="margin: 1.5rem 0 1rem; color: var(--warning);">即将到期（${expiring.length}）</h4>`;
        expiring.forEach(m => { const days = Math.ceil((new Date(m.expiryDate) - new Date()) / (1000 * 60 * 60 * 24)); html += `<div class="reminder-item expiring"><span class="icon">⚠️</span><div class="info"><h4>${m.name}</h4><p>还有 ${days} 天到期</p></div></div>`; });
      }
    }
    reminderList.innerHTML = html;
    document.getElementById('reminderModal').classList.add('active');
  }

  closeReminderModal() { document.getElementById('reminderModal').classList.remove('active'); }

  openCameraModal() { document.getElementById('cameraModal').classList.add('active'); this.resetCamera(); }
  closeCameraModal() { document.getElementById('cameraModal').classList.remove('active'); this.resetCamera(); }

  resetCamera() {
    this.selectedImageFile = null;
    const imageInput = document.getElementById('imageInput');
    if (imageInput) imageInput.value = '';
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('loadingArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('uploadArea').style.display = 'flex';
    document.getElementById('previewImage').src = '';
  }

  handleImageSelect(e) {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) { this.showToast('请选择图片文件', 'error'); return; }
    this.selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById('previewImage').src = event.target.result;
      document.getElementById('uploadArea').style.display = 'none';
      document.getElementById('previewArea').style.display = 'block';
    };
    reader.readAsDataURL(file);
  }

  async recognizeImage() {
    if (!this.selectedImageFile) { this.showToast('请先选择图片', 'error'); return; }
    document.getElementById('previewArea').style.display = 'none';
    document.getElementById('loadingArea').style.display = 'flex';
    try {
      const recognizedText = await this.simulateOCR();
      const recognizedMedicines = this.extractMedicineNames(recognizedText);
      const matchResults = this.matchWithInventory(recognizedMedicines);
      this.displayMatchResults(matchResults, recognizedMedicines);
      document.getElementById('loadingArea').style.display = 'none';
      document.getElementById('resultArea').style.display = 'block';
    } catch (error) {
      this.showToast('识别失败，请重试', 'error');
      this.resetCamera();
    }
  }

  async simulateOCR() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const samples = ['阿奇霉素胶囊', '布洛芬片', '阿莫西林胶囊', '蒙脱石散', '氯雷他定片', '维生素C片', '美林混悬液', '开瑞坦片', '肠虫清片', '头孢克洛胶囊', '板蓝根颗粒'];
    const shuffled = samples.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 5) + 2).join('\n');
  }

  extractMedicineNames(text) {
    const lines = text.split('\n').filter(l => l.trim());
    const medicineNames = [];
    const allKeys = new Set([...Object.keys(medicineDB), ...Object.keys(this.customMedicineDB)]);
    for (const line of lines) {
      for (const medName of allKeys) {
        if (line.includes(medName) && !medicineNames.includes(medName)) medicineNames.push(medName);
      }
    }
    return medicineNames;
  }

  matchWithInventory(recognizedMedicines) {
    const results = { found: [], notFound: [] };
    for (const medName of recognizedMedicines) {
      const stockItems = this.medicines.filter(m => m.name.includes(medName) || medName.includes(m.name));
      if (stockItems.length > 0) {
        results.found.push({ name: medName, stockCount: stockItems.length, items: stockItems.map(item => ({ name: item.name, quantity: item.quantity || '1', expiryStatus: this.getExpiryStatus(item.expiryDate) })) });
      } else {
        const dbInfo = this.findMedicine(medName);
        results.notFound.push({ name: medName, category: dbInfo ? dbInfo.category : '未知', inDatabase: !!dbInfo });
      }
    }
    return results;
  }

  displayMatchResults(matchResults, recognizedMedicines) {
    const container = document.getElementById('matchResult');
    const total = recognizedMedicines.length, found = matchResults.found.length, notFound = matchResults.notFound.length;
    let html = `<div class="result-summary"><div class="summary-item"><span class="count">${total}</span><span class="label">识别药物</span></div><div class="summary-item"><span class="count" style="color: var(--danger);">${found}</span><span class="label">药库已有</span></div><div class="summary-item"><span class="count" style="color: var(--success);">${notFound}</span><span class="label">药库没有</span></div></div>`;
    if (total === 0) html += `<div class="no-matches"><p>未能识别出药物名称</p></div>`;
    else {
      html += '<div class="match-list">';
      if (matchResults.found.length > 0) {
        html += `<h5 style="margin: 1rem 0 0.75rem; color: var(--danger);">以下药物您的药箱中已有</h5>`;
        for (const item of matchResults.found) html += `<div class="match-item has-stock"><span class="medicine-icon">💊</span><div class="medicine-info"><div class="medicine-name">${item.name}</div><div class="medicine-stock">药库中共有 ${item.stockCount} 份</div></div><span class="stock-badge has">已有</span></div>`;
      }
      if (matchResults.notFound.length > 0) {
        html += `<h5 style="margin: 1rem 0 0.75rem; color: var(--success);">以下药物您的药箱中没有</h5>`;
        for (const item of matchResults.notFound) {
          const dbBadge = item.inDatabase ? `<span style="font-size: 0.75rem; color: var(--primary);">(${item.category})</span>` : '';
          html += `<div class="match-item no-stock"><span class="medicine-icon">💉</span><div class="medicine-info"><div class="medicine-name">${item.name} ${dbBadge}</div><div class="medicine-stock">${item.inDatabase ? '系统认识该药物' : '不在数据库中'}</div></div><span class="stock-badge none">需购买</span></div>`;
        }
      }
      html += '</div>';
    }
    container.innerHTML = html;
  }

  showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

window.app = null;
