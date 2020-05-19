<template>
  <div>
    <!--
        以下内容都来自与 https://github.com/impress/impress.js/blob/master/index.html
        翻译 xiangxiao
    -->
    <!--

        欢迎来到光明之源，年轻的绝地学徒。

        还差一步就要学到你感兴趣的东西了....

                                  ____                  
                                _.' :  `._               
                            .-.'`.  ;   .'`.-.           
                  __      / : ___\ ;  /___ ; \      __  
                ,'_ ""=-.:__;".-.";: :".-.":__;.-="" _`,
                :' `.t""=-.. '<@.`;_  ',@:` ..-=""j.' `;
                      `:-.._J '-.-'L__ `-.-' L_..-;'     
                        "-.__ ;  .-"  "-.  : __.-"       
                            L ' /.======.\ ' J           
                            "-.   "__"   .-"            
                            __.l"-:_JL_;-";.__           
                        .-j/'.;  ;""""  / .'\"-.        
                      .' /:`. "-.:     .-" .';  `.      
                    .-"  / ;  "-. "-..-" .-"  :    "-.   
                .+"-.  : :      "-.__.-"      ;-._   \  
                ; \  `.; ;                    : : "+. ; 
                :  ;   ; ;                    : ;  : \: 
                ;  :   ; :                    ;:   ;  : 
                : \  ;  :  ;                  : ;  /  :: 
                ;  ; :   ; :                  ;   :   ;: 
                :  :  ;  :  ;                : :  ;  : ; 
                ;\    :   ; :                ; ;     ; ; 
                : `."-;   :  ;              :  ;    /  ; 
                ;    -:   ; :              ;  : .-"   : 
                :\     \  :  ;            : \.-"      : 
                  ;`.    \  ; :            ;.'_..-=  / ; 
                  :  "-.  "-:  ;          :/."      .'  :
                  \         \ :          ;/  __        :
                    \       .-`.\        /t-""  ":-+.   :
                    `.  .-"    `l    __/ /`. :  ; ; \  ;
                      \   .-" .-"-.-"  .' .'j \  /   ;/ 
                        \ / .-"   /.     .'.' ;_:'    ;  
                        :-""-.`./-.'     /    `.___.'   
                              \ `t  ._  /               
                                "-.t-._:'                

    -->

    <!--
        你想知道如何使用impress.js?

        您已经完成了第一个非常重要的步骤 — 阅读源代码。
        这就是如何建立impress.js实例的 - 用HTML和CSS代码构建。

        相信我，你需要相当不错的HTML和CSS技能，才能有效地使用impress.js。
        更重要的是，你需要成为一名设计师。impress.js中没有默认的样式和布局。

        你需要用你的想象力去设计和建造它。

        所以…

        你还想知道如何使用impress.js吗?

        我们开始吧
    -->
    <!--
        例如，此回退消息仅在body上有 “impress-not-supported” 类时才可见。
    -->
    <div class="fallback-message">
      <p>
        你的浏览器 <b>不支持impress.js</b>, 所以你会看到这个演讲的简化版本。
      </p>
      <p>
        为了获得最好的体验，请使用最新版本 <b>Chrome</b>, <b>Safari</b> or
        <b>Firefox</b> 浏览器.
      </p>
    </div>

    <!--
    
    Now that's the core element used by impress.js.
    
    That's the wrapper for your presentation steps. In this element all the impress.js magic happens.
    It doesn't have to be a `<div>`. Only `id` is important here as that's how the script find it.
    
    Often you don't need to use any attributes here, but for educational purposes I have used all of them below.

    To change the duration of the transition between slides use `data-transition-duration="2000"` giving it
    a number of ms. It defaults to 1000 (1s).

    这就是impress.js使用的核心部分。

    这就是演示步骤的最外层。在这个元素中，所有的 impress.js 魔术都会发生。
    它不需要是' <div> '这里只有“id”重要，因为脚本就是这样找到它的。

    通常您不需要在这里使用任何属性，但是出于教学的目的，我在下面使用了所有这些属性。

    要更改幻灯片之间转换的持续时间，请使用 `data-transition-duration=“2000”` 这里单位是ms 默认值为1000(1秒)。

    在编写impress.js演示文稿时，您应该以屏幕大小为目标，您可以在这里定义屏幕大小。
    默认值是1024 x 768。你应该写你的CSS好像这是屏幕大小用于 演示。当你在不同大小的屏幕(或浏览器窗口)上展示演示文稿时，
    impress.js会自动缩放显示以适应屏幕。最小和最大极限 这个比例也可以在这里定义。

    注: 我打算在2021年将默认设置改为目标高清屏幕。所以你可能需要习惯定义这些属性，以避免在更改默认值时出现任何中断。

    您还可以使用 “data-perspective="500"” 来控制透视图，并给它设置一些像素。
    默认值是1000。如果你不想要任何3D效果，你可以把它设为0。
    如果你想要改变这个值，请确保你理解CSS透视图是如何工作的:
    https://developer.mozilla.org/en/CSS/perspective
    
    插件:

    我们将autoplay plugin的默认时间设置为7秒。自动播放将自动前进
    超时后的下一张幻灯片。

    -->
    <div
      id="impress"
      data-transition-duration="1000"
      data-width="1024"
      data-height="768"
      data-max-scale="3"
      data-min-scale="0"
      data-perspective="1000"
      data-autoplay="7"> -->

      <!--
        
        Here is where interesting thing start to happen.
        
        Each step of the presentation should be an element inside the `#impress` with a class name
        of `step`. These step elements are positioned, rotated and scaled by impress.js, and
        the 'camera' shows them on each step of the presentation.
        
        Positioning information is passed through data attributes.
        
        In the example below we only specify x and y position of the step element with `data-x="-1000"`
        and `data-y="-1500"` attributes. This means that **the center** of the element (yes, the center)
        will be positioned in point x = -1000px and y = -1500px of the presentation 'canvas'.
        
        It will not be rotated or scaled.

        有趣的事情发生了。

        演示的每个步骤都应该是“#impress”中带有类名的一个元素“步骤”。这些阶跃元素通过impress定位、旋转和缩放。impress.js和
        “镜头”会在演示的每一步向他们展示。

        定位每个步骤是通过数据属性传递。

        在下面的例子中，我们只指定了带有`data-x="-1000"` `data-y="-1500"`的step元素的x和y位置和数据属性。这意味着**元素的中心**(是的，中心)
        将被定位在演示“画布”的 x = -1000px 和 y = -1500px 处。

        它不会被旋转或缩放。只是平移。
        
        --------
        插件: 和一开始的配置不同，这里自动播放时间被调整为10秒。
        
    -->
      <div
        id="bored"
        class="step slide"
        data-x="-1000"
        data-y="-1500"
        data-autoplay="10"
      >
        <q>您是否已经 <b>厌倦了</b> 这些都是基于幻灯片的演示 ?</q>
        <a href="https://github.com/xxholly32/impress-demo">本项目地址</a>
      </div>

      <!--
               
        step元素的' id '属性用于在URL中标识它，但它是可选的。
        如果没有定义，它将得到一个默认值' step-N '，其中N是幻灯片的个数。

        所以在下面的例子中，它是“step 2”。

        当这个步骤被激活时，url的哈希部分将是' #/step-2 '。

        你也可以在链接中使用“#step-2”来直接指向这个特定的步骤。

        请注意，虽然' #/step-2 '(带斜杠)也适用于链接，但不建议这样做。
        使用传统的基于“id”的链接，比如“#step-2”，可以使这些链接在回退模式下也可以使用。
    -->
      <div class="step slide" data-x="0" data-y="-1500">
        <q
          >您不认为传统的经典演示模版 <strong>在现代浏览器中</strong> 不应该
          <strong>受到设计的限制</strong> ?</q
        >
      </div>

      <div class="step slide" data-x="1000" data-y="-1500">
        <q
          >你想在你的演讲中加入更多的<strong>视觉冲击</strong>，
          来<strong>提升你的演讲效果</strong>么？</q
        >
      </div>

      <!--

        这是一个元素被缩放的例子。

        同样，我们使用' data- '属性，这次是' data-scale="4" '，所以它的意思是这样的
        元素的大小是其他元素的4倍。从展示和过渡的角度来看，它意味着，它将被缩放(4倍)使它回到正确的大小。
        
      -->
      <div id="title" class="step" data-x="0" data-y="0" data-scale="4">
        <span class="try">当你使用</span>
        <h1>impress.js<sup>*</sup></h1>
        <span class="footnote"><sup>*</sup> 你的想象将不受限制</span>
      </div>

      <!--
        下面的例子引入了旋转。

        我们使用' data-rotate="90"属性，这意味着元素都顺时针旋转90度。
      -->
      <div
        id="its"
        class="step"
        data-x="850"
        data-y="3000"
        data-rotate="90"
        data-scale="5"
      >
        <p>
          这是一个 <strong>展示工具</strong> <br />
          理念来源于 <a href="http://prezi.com">prezi.com</a>
          <br />
          以及基于现代浏览器中
          <strong>CSS3 的 transforms 和 transitions特性.</strong>
        </p>
      </div>

      <div
        id="big"
        class="step"
        data-x="3500"
        data-y="2100"
        data-rotate="180"
        data-scale="6"
      >
        <p>可以满足您 <b>无穷</b> <span class="thoughts">的创意</span></p>
      </div>

      <!--
        
        And now it gets really exciting! We move into third dimension!
        
        Along with `data-x` and `data-y`, you can define the position on third (Z) axis, with
        `data-z`. In the example below we use `data-z="-3000"` meaning that element should be
        positioned far away from us (by 3000px).
        
       介绍第三纬度的实现，是否很兴奋

        除了“data-x”和“data-y”之外，还可以定义第三(Z)轴上的位置
        “data-z”。在下面的例子中，我们使用了' data-z="-3000" '，意思是该元素应该是
        距离我们(3000px) 远。
      -->
      <div
        id="tiny"
        class="step"
        data-x="2825"
        data-y="2325"
        data-z="-3000"
        data-rotate="300"
        data-scale="1"
      >
        <p>或者 <b>很小的</b> idea</p>
      </div>

      <!--
        在下面这个演示中并没有加入任何data属性，但你可以注意到这段文字的一些字在变化。
        这其实是一个非常基本的CSS转换，当这个step元素被创建时候会触发。

        在演示的一开始，所有的步骤元素都被指定为“future”类。这意味着他们其实都还没有被访问过。

        当演示移动到给定步骤“future”时，将更改为“present”类名。
        这就是这个步骤的动画工作原理——当这个步骤有“present”类时，文本就会移动。

        最后，当这一步离开时，' present '类将从元素和' past '中删除。        

        所以基本上每个步骤都有三个类:“future”、“present”和“past”。
        只有一个当前步骤具有“present”类。

        注意:data-x/y/z属性，如果没有定义，默认情况下将继承前一步。为了在z轴上回到0，我们必须把它设为0。
    -->
      <div
        id="ing"
        class="step"
        data-x="3500"
        data-y="-850"
        data-z="0"
        data-rotate="270"
        data-scale="6"
      >
        <p>
          <b class="positioning">位置</b>, <b class="rotating">角度</b> 和
          <b class="scaling">缩放比例</b> 都可以在画布上调节
        </p>
      </div>

      <div
        id="imagination"
        class="step"
        data-x="6700"
        data-y="-300"
        data-scale="6"
      >
        <p>
          在这里唯一的 <b>限制</b> 是您的
          <br />
          <b class="imagination">想象力</b>
        </p>
      </div>

      <div
        id="source"
        class="step"
        data-x="6300"
        data-y="2000"
        data-rotate="20"
        data-scale="4"
      >
        <p>想知道更多?</p>
        <q
          ><a href="http://github.com/impress/impress.js">去看源码吧</a>,
          Luke!</q
        >
      </div>

      <div
        id="one-more-thing"
        class="step"
        data-x="6000"
        data-y="4000"
        data-scale="2"
      >
        <p>还有一件事...</p>
      </div>

      <!--
        最后一个则充分体现了js的强大功能和灵活性。

        你不仅可以在3D中定位元素，还可以在任何轴上旋转它。
        所以这个例子会绕X轴旋转-40度(逆时针40度绕Y轴10度(顺时针)。

        当然，你可以用“data-rotate-z”将它绕Z轴旋转——效果完全一样
        作为“data-rotate”(这两个基本上是别名)。
        
    -->
      <div
        id="its-in-3d"
        class="step"
        data-x="6200"
        data-y="4300"
        data-z="-100"
        data-rotate-x="-40"
        data-rotate-y="10"
        data-scale="2"
      >
        <p>
          <span class="have">是否</span> <span class="you">您</span>
          <span class="noticed">注意到</span> <span class="its">它</span>
          <span class="in">处于</span> <b>3D 模式<sup>*</sup></b
          >?
        </p>
        <span class="footnote">* beat that, prezi ;)</span>
      </div>

      <!--        
        因此，总结所有可能用于定位表示步骤的属性，我们有:

        * ' data-x '， ' data-y '， ' data-z ' -它们定义了** 画布的中心**的位置，以像素为单位;默认值为0;

        * ‘data-rotate-x’，‘data-rotate-y’，‘data-rotate-z’，‘data-rotate’——它们定义了
        以度为单位的给定轴周围的元素;默认值为0;“data-rotate”和“data-rotate-z”
        完全一样;
        *‘data-scale’—定义画布的大小比例;默认值为1

        js在CSS转换函数中使用这些值，更多信息请参考
        CSS transfrom docs: https://developer.mozilla.org/en/CSS/transform
    -->
      <div
        id="overview"
        class="step"
        data-x="3000"
        data-y="1500"
        data-z="0"
        data-scale="10"
      ></div>
    </div>

    <!--
        这是一个UI插件。你可以在https://github.com/impress/impress.js/tree/master/src/plugins中了解更多关于插件的信息。
        现在，我只告诉您它添加了一些图形化控件来导航
        演示。在CSS文件中，你可以根据自己的喜好设置样式。我们把它们放在右下角。
    -->
    <div id="impress-toolbar"></div>

    <!--
    
      Hint is not related to impress.js in any way.
      
      But it can show you how to use impress.js features in creative way.
      
      When the presentation step is shown (selected) its element gets the class of "active" and the body element
      gets the class based on active step id `impress-on-ID` (where ID is the step's id)... It may not be
      so clear because of all these "ids" in previous sentence, so for example when the first step (the one with
      the id of `bored`) is active, body element gets a class of `impress-on-bored`.
      
      This class is used by this hint below. Check CSS file to see how it's shown with delayed CSS animation when
      the first step of presentation is visible for a couple of seconds.
      
      ...
      
      And when it comes to this piece of JavaScript below ... kids, don't do this at home ;)
      It's just a quick and dirty workaround to get different hint text for touch devices.
      In a real world it should be at least placed in separate JS file ... and the touch content should be
      probably just hidden somewhere in HTML - not hard-coded in the script.
      
      Just sayin' ;)

      Hint与impress.js没有任何关系。

      但它可以向您展示如何创造性地使用impress.js特性。

      当表示步骤显示(选中)时，它的元素获得“active”类和body元素获取基于活动的步骤“impress-on-id”的类(其中id是该步骤的id)…也许不是
      这么清楚是因为前面所有这些“id”的句子，所以举个例子当第一步id (' bored ')是活动的，body元素得到一个类' impress-on-bored '。

      这个类由下面的提示使用。检查CSS文件，看看它是如何显示与延迟的CSS动画时，演示的第一步在几秒钟内是可见的。
      
  -->
    <div class="hint">
      <p>
        使用空格键或方向键进行导航。 <br />
        按 “P” 启动控制台。
      </p>
    </div>
  </div>
</template>

<script>
import "@/assets/css/impress-demo.css";
// import impress from "impress.js"

export default {
  name: "ImpressDemo",
  mounted() {
    // eslint-disable-next-line no-undef
    impress().init();
  },
};
</script>

<style></style>
