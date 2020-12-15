import { $ecomConfig } from '@ecomplus/utils'
import CleaveInput from 'vue-cleave-component'

const countryCode = $ecomConfig.get('country_code')

export default {
  name: 'InputDate',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    placeholder () {
      return countryCode === 'US'
        ? 'dd-mm-aaaa'
        : 'dd-mm-yyyy'
    },

    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },

    cleaveOptions () {
      return countryCode === 'US'
        ? {
          date: true,
          delimiter: '/',
          datePattern: ['d', 'm', 'Y']
        }
        : {
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd']
        }
    }
  }
}
