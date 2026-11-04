export interface AcceptedPaper {
  title: string;
  authors: string;
  url: string;
}

// Supplied accepted-paper list, updated November 4, 2026. Source order preserved.
export const ACCEPTED_PAPERS: AcceptedPaper[] = [
  {
    "title": "ENCORE: Few-Shot Agentic Discovery of Manipulation Strategies",
    "authors": "Yifan Kang, Zihan Wang, Zhiwen Fan, Bangya Liu",
    "url": "https://openreview.net/forum?id=9CSIakHmiD"
  },
  {
    "title": "Recovery Credit: Evaluating Robot Decisions Under Physical-State Uncertainty",
    "authors": "Mateo PETEL",
    "url": "https://openreview.net/forum?id=UPAuYhlq0Y"
  },
  {
    "title": "2AM: Grounding Agent-Side Memory as Guidance for Steerable Action Models in Long-Horizon Manipulation",
    "authors": "Yutong Hu, FengJiao Chen, Xuezhi Cao, Renaud Detry",
    "url": "https://openreview.net/forum?id=y0qBMe2qH3"
  },
  {
    "title": "World Action Planner: Generalizable Robot Decision-Making with Action-Conditioned World Models",
    "authors": "XiangCheng Zhang, Runhan Huang, Yilun Du",
    "url": "https://openreview.net/forum?id=rNHO9vQF9h"
  },
  {
    "title": "Uncertainty Is the Wrong Trigger: An Exact Account of When an Agent Should Ask Before It Cannot Undo",
    "authors": "Varun Puttagunta",
    "url": "https://openreview.net/forum?id=cPUMmLHDG6"
  },
  {
    "title": "EMBODIEDSWE: Coding Agents for Long Horizon Dexterous Robotics",
    "authors": "Yilang Liu, Zeyu Shen, Haoxiang You, Zhicheng Zheng, Lihan Zha, Kashu Yamazaki, Mingtong Zhang, Suning Huang, Jiankai Sun, Qianzhong Chen, Luxi He, Kaiyuan Liu, Haoran Chang, Katerina Fragkiadaki, Mac Schwager, Dhruv Shah, Peter Henderson, Ian Abraham, Canwen Xu",
    "url": "https://openreview.net/forum?id=3c1CfvfHa7"
  },
  {
    "title": "Agentic Real2Sim: Physics-based World Modeling with Vision-Language Agents",
    "authors": "Guanxiong Chen, Qianjun Xia, Jiawei Peng, Heng Zhang, Pengyu Jing, Bole Ma, Justin Qian, Yixian Cheng, Ziyi Jiao, Bingyang Zhou, Yiduo Qu, Luoxin Ye, Kaifeng Zhang, Kunyi Wang, Weijia Zeng, Yunuo Chen, Pengzhi Yang, Ziqiu Zeng, Siyuan Luo, Huamin Wang, Chao Liu, Alan Yuille, Fan Shi, Changxi Zheng, Yunzhu Li, Chenfanfu Jiang, Peter Yichen Chen",
    "url": "https://openreview.net/forum?id=G9RmahESMC"
  },
  {
    "title": "Program-Level Adversarial Co-Adaptive Self-Play for Robotic Security",
    "authors": "Leo Benaharon, Chi Zhang, Wei Zheng, Weifan Zhang, Yifan Wei",
    "url": "https://openreview.net/forum?id=LkW6BOlHMY"
  },
  {
    "title": "SceneRig: An Agentic System for Simulation-Ready 3D Scene Reconstruction from Single Images",
    "authors": "Rundong Luo, Yunong Liu, Di Cao, Matthew Tancik, Shyamal Buch, Colton Stearns, Wenqi Xian",
    "url": "https://openreview.net/forum?id=C3sG9bZPbs"
  },
  {
    "title": "Co-Evolving Robot Orchestrators and Policies through Deployment",
    "authors": "Xilun Zhang, Maggie Wang, Erik Bauer, Hong-Xing Yu, Huang Huang, Jiajun Wu, Marco Pavone",
    "url": "https://openreview.net/forum?id=UJHkYOreYB"
  },
  {
    "title": "Fewer Tokens, Better Action: GPT-6 Astra Robot Agents with 14% Higher Success but 65% Fewer Tokens",
    "authors": "Ruiyang Si, Jianxin Bi, Shunyu Yang, Rui Ni, Wenbo Huang, Qiang Wang, Shulong Jiang, Duomin Wang, Zhen Dong, Daquan Zhou",
    "url": "https://openreview.net/forum?id=wKgMn9vqUi"
  },
  {
    "title": "Skill2Real: Agentic Skill Learning for Zero-Shot Sim-to-Real Robot Manipulation",
    "authors": "Xincheng He, Siyu Ma, Chang Yu, Yunuo Chen, Yanjia Huang, Ying Nian Wu, Yin Yang, Chenfanfu Jiang",
    "url": "https://openreview.net/forum?id=52exBmCzDf"
  },
  {
    "title": "Guava: Distilling Frontier VLMs into a Compact Agent through a Robotic Manipulation Harness",
    "authors": "Haowen Liu, Xirui Li, Shaoxiong Yao, Peng Shi, Tianyi Zhou, Jia-Bin Huang, Furong Huang, Jiayuan Mao",
    "url": "https://openreview.net/forum?id=02FSMHg6ii"
  },
  {
    "title": "Topology-Informed Visual Prompting for Hierarchical Vision-Language-Action Control",
    "authors": "Haoyang Wu, Abhinav Kumar, Dmitry Berenson",
    "url": "https://openreview.net/forum?id=RkzWx9Sfcz"
  },
  {
    "title": "PhysCaP: Grounding Code-as-Policy Agent with Physics-Informed Exploration",
    "authors": "Chen-Yu Lin, Jing-Wen Chen, Hsueh-En Chang, Hung-An Chen, Sheng-Hsun Chang, Chi-Pin Huang, Fu-En Yang, Min-Hung Chen, Yi-Ting Chen, Yu-Chiang Frank Wang, Shao-Hua Sun",
    "url": "https://openreview.net/forum?id=JprkI7JQDW"
  },
  {
    "title": "[PAPER]: A Few Words Go a Long Way: Language Guided Robot Policy Synthesis",
    "authors": "Daphne Chen, Archit Ritesh Jain, Eric Goossen, Emma Romig, Michael Murray, Nick Walker, Maya Cakmak",
    "url": "https://openreview.net/forum?id=cRzAMT2Jll"
  },
  {
    "title": "FEIJOA: Task-Driven Grounding and Execution for Mobile Manipulation",
    "authors": "Aditya Agarwal, William Shen, Sahit Chintalapudi, Lucy Cai, Nishanth Kumar, Aidan Curtis, Travis Manderson, Tomás Lozano-Pérez, Leslie Pack Kaelbling",
    "url": "https://openreview.net/forum?id=Eq3xq6KZDC"
  },
  {
    "title": "ASPIRE: Agentic /Skills Discovery for Robotics",
    "authors": "Runyu Lu, Yubo Wu, Ethan Kou, Haotian Lin, Letian Fu, Wenli Xiao, Ajay Mandlekar, Yinzhen Xu, Guanya Shi, Ken Goldberg, Ang Chen, Mosharaf Chowdhury, Jan Kautz, Yuke Zhu, Linxi Fan, Guanzhi Wang",
    "url": "https://openreview.net/forum?id=LDd7VM2doA"
  },
  {
    "title": "Do Agentic Policies Need to Look at Every Step? Geometric Abstraction for Reasoning and Action",
    "authors": "Yihang Liu, Yiming Chen, Mingzhe Zheng",
    "url": "https://openreview.net/forum?id=CQFstcjx1Z"
  },
  {
    "title": "Generalized Planning Interfaces for Agentic Robotics",
    "authors": "Ben Zandonati, Yifan Kang, Tomás Lozano-Pérez, Leslie Pack Kaelbling",
    "url": "https://openreview.net/forum?id=sU18hA2zbD"
  },
  {
    "title": "STeP: Signal Temporal Logic for Precise Specifications for Action Generation with Vision Language Models",
    "authors": "Kasra Torshizi, Anukriti Singh, Sidharth Mathur, Khuzema Habib, Leo Du, Pratap Tokekar",
    "url": "https://openreview.net/forum?id=ys5jtBPagk"
  },
  {
    "title": "RAPID: Robot Agentic Programming from Demonstrations",
    "authors": "Yuyao Liu, Jiayuan Mao, David Hsu, Leslie Pack Kaelbling, Tomás Lozano-Pérez",
    "url": "https://openreview.net/forum?id=xQRzEp0Zhj"
  },
  {
    "title": "Agentic World Action Model",
    "authors": "Zhuoyang Liu, Dantong Niu, Botong Zhang, Boning Shao, Jing Wang, Ruijie Zheng, Yuvan Sharma, Runyu Lu, Jiaming Liu, Renrui Zhang, Roei Herzig, Yutong Bai, Ken Goldberg, Danfei Xu, Yuke Zhu, Guanzhi Wang, Linxi Fan, Trevor Darrell",
    "url": "https://openreview.net/forum?id=RgpYrdqaFM"
  },
  {
    "title": "Harness VLA: Steering Frozen VLAs into Reliable Manipulation Primitives via Memory-Guided Agents",
    "authors": "Yixian Zhang, Huanming Zhang, Feng Gao, Xiao Li, Zhihao Liu, Yi Nie, Chunyang Zhu, Jiaxing Qiu, Yuchen Yan, Jiyuan Liu, Wenhao Tang, Jiaji Rao, Zhengru Fang, Changxu Wei, Quanlu Zhang, Yu Wang, Wenbo Ding, Chao Yu",
    "url": "https://openreview.net/forum?id=vTOrVYhBnp"
  },
  {
    "title": "ComDex: A Compositional Framework for Dexterity Learning from Offline Human Manipulation Videos",
    "authors": "Yunhai Han, Harish Ravichandar, Yashraj Narang, Jie Xu, Wei Yang",
    "url": "https://openreview.net/forum?id=l0BBYNeW4A"
  },
  {
    "title": "Impossible Twins: Judge-Free Measurement of Verifier False Positives in Agentic Robot Controller Search",
    "authors": "Tianlang Chen",
    "url": "https://openreview.net/forum?id=uMkXmX3mAy"
  },
  {
    "title": "RLE-Bench: A Qualifying Exam for Coding Agents as Robot Learning Engineers",
    "authors": "Haitong Ma, Chenxiao Gao, Rushi Qiang, Bo Dai, Na Li",
    "url": "https://openreview.net/forum?id=YxvA7kHDbK"
  },
  {
    "title": "SimEX: Simulation-Integrated Robotics AutoResearch",
    "authors": "Jiaheng Hu, Roberto Martín-Martín, Peter Stone, Rocky Duan, Zhenyu Jiang, Guanya Shi",
    "url": "https://openreview.net/forum?id=Hpk5GERa1W"
  },
  {
    "title": "Embodied XAI: Tracing Hierarchical Agent Decisions via 4D Spatio-Temporal Saliency",
    "authors": "Suzan Halim",
    "url": "https://openreview.net/forum?id=9HKnVoy6O0"
  },
  {
    "title": "Agentic Aerial Cinematography: From Dialogue Cues to Cinematic Trajectories",
    "authors": "Yifan Lin, Sophie Z. Liu, Ran Qi, George Z. Xue, Xinping Song, Chao QIn, Hugh H.-T. Liu",
    "url": "https://openreview.net/forum?id=AVqVpgtKYF"
  },
  {
    "title": "Contact Code: A Typed Program Interface for Measurable and Repairable Contact-Rich Manipulation",
    "authors": "Yanru Wu, Zizhe Zhang, Qi Chen, Haimin Hu, Alan Yuille, Jieneng Chen",
    "url": "https://openreview.net/forum?id=78L8T5nsLM"
  },
  {
    "title": "Can Astra Solve RoboMME without Breaking the Bank?",
    "authors": "Bingao Chen, Haoquan Fang, Karen Liu",
    "url": "https://openreview.net/forum?id=F1qPCjfU0x"
  },
  {
    "title": "SUTO: Failure-Localized Reasoning for Robot Task Planning and Execution",
    "authors": "Sohan Rudra, Yuezhe Zhang, Kumar Manas, Vignesh Prasad, Georgia Chalvatzaki",
    "url": "https://openreview.net/forum?id=BCdDYO0jo9"
  },
  {
    "title": "Physical Agency: Better Robot Performance Through Better Interfaces",
    "authors": "Liane Galanti, Dhruv Shah, Tri Dao",
    "url": "https://openreview.net/forum?id=SlmaqmaqW0"
  },
  {
    "title": "RL$^2$-VLA: Adaptive RL Latent Compositional Steering with Test-Time Scaling for Vision-Language-Action Models",
    "authors": "Derek Ming Siang Tan, Shailesh Shailesh, Srikrishna Iyer, William Teo, Yuanliang Ju, Qiao Gu, Guillaume Adrien Sartoretti",
    "url": "https://openreview.net/forum?id=DdoqCu21kt"
  },
  {
    "title": "How Hard Are Current Robot Memory Benchmarks for Agentic Harnesses?",
    "authors": "Feiyang Wu, Weirui Ye, Haonan Chen, Haoyu Chen, Jiayu Zhou, Yandong Ji, Yuejiang Liu, Yilun Du",
    "url": "https://openreview.net/forum?id=z5FsJD37Dj"
  },
  {
    "title": "KPI: A Promptable Kernel for Physical Interaction on Humanoids",
    "authors": "Yikai Wang, Honghao Zhu, Xiao Hu, Hao Zhang, Zelin Wang, Yip Fun Yeung, Ding Zhao, Lingfeng Sun",
    "url": "https://openreview.net/forum?id=F7Dp4022mM"
  },
  {
    "title": "Reconstruct, Practice, Go Real: Guided Self-Improvement for Embodied Agents",
    "authors": "Yen-Jen Wang, Haozhe Jiang, Shuying Deng, Haoru Xue, Weirui Ye, Rocky Duan, Nika Haghtalab, S. Shankar Sastry, Pieter Abbeel, Haozhi Qi",
    "url": "https://openreview.net/forum?id=RxO0XrZm0h"
  },
  {
    "title": "MemBodied: Recurrent Associative Memory for Vision-Language-Action Models",
    "authors": "Tej Deep Pala, Navonil Majumder, Bryce Goh, Raphael Yee, Jianfei Yang, Liming Chen, Soujanya Poria",
    "url": "https://openreview.net/forum?id=ttNVX8zEcB"
  }
];
